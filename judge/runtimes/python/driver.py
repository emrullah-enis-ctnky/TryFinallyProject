"""
TryFinally judge — Python driver.

Konteynerin içinde çalışır. Kullanıcının solution.py dosyasını yükler, stdin'den
gelen testleri sırayla Solution().<metot>(*girdi) ile çağırır ve her test için
"@@JUDGE@@ {json}" satırları basar. Karşılaştırmayı burada değil, judge motoru
(TypeScript) yapar; beklenen çıktılar konteynere hiç gönderilmez.

Kullanım: python3 driver.py <solution.py yolu> <metot adı>
"""

import io
import json
import linecache
import sys
import time
import traceback

MARK = "@@JUDGE@@"
SOURCE_NAME = "solution.py"
REAL_STDOUT = sys.__stdout__


def emit(event):
    REAL_STDOUT.write("\n" + MARK + " " + json.dumps(event, ensure_ascii=False) + "\n")
    REAL_STDOUT.flush()


def to_jsonable(value):
    if isinstance(value, (set, frozenset, tuple)):
        return list(value)
    raise TypeError(f"{type(value).__name__} tipi JSON'a çevrilemiyor")


def user_traceback(error):
    """Sadece kullanıcının kendi satırlarını gösteren, LeetCode benzeri hata metni."""
    frames = [f for f in traceback.extract_tb(error.__traceback__) if f.filename == SOURCE_NAME]
    lines = ["Traceback (most recent call last):\n"] if frames else []
    lines += traceback.format_list(frames)
    lines += traceback.format_exception_only(type(error), error)
    return "".join(lines).rstrip()


def error_kind(error):
    if isinstance(error, MemoryError):
        return "memory"
    if isinstance(error, RecursionError):
        return "stack"
    return "exception"


def load_solution(path):
    with open(path, encoding="utf-8") as file:
        source = file.read()
    # Hata mesajlarında satır içeriği görünsün diye kaynağı linecache'e koyuyoruz.
    linecache.cache[SOURCE_NAME] = (len(source), None, source.splitlines(True), SOURCE_NAME)

    namespace = {"__name__": "solution"}
    # LeetCode'daki gibi List, Optional, collections vb. hazır gelsin.
    exec(
        "from typing import *\n"
        "import collections, math, heapq, bisect, itertools, functools, string\n"
        "from collections import *\n",
        namespace,
    )
    try:
        exec(compile(source, SOURCE_NAME, "exec"), namespace)
    except SyntaxError as error:
        emit({"event": "compile_error", "message": "".join(traceback.format_exception_only(type(error), error)).rstrip()})
        return None
    except BaseException as error:  # modül seviyesinde çalışan hatalı kod
        emit({"event": "compile_error", "message": user_traceback(error)})
        return None

    solution_class = namespace.get("Solution")
    if solution_class is None:
        emit({"event": "compile_error", "message": "Kodda 'Solution' adında bir sınıf bulunamadı."})
        return None
    return solution_class


def main():
    solution_path, method_name = sys.argv[1], sys.argv[2]
    tests = json.loads(sys.stdin.read())
    sys.setrecursionlimit(10000)

    solution_class = load_solution(solution_path)
    if solution_class is None:
        return

    for test in tests:
        emit({"event": "start", "id": test["id"]})
        captured = io.StringIO()
        sys.stdout = captured
        started = time.perf_counter()
        event = {"event": "result", "id": test["id"]}
        try:
            method = getattr(solution_class(), method_name)
            result = method(*test["input"])
            event["ok"] = True
            event["output"] = json.loads(json.dumps(result, default=to_jsonable))
        except BaseException as error:
            event["ok"] = False
            event["error"] = user_traceback(error)
            event["errorKind"] = error_kind(error)
        finally:
            sys.stdout = REAL_STDOUT
        event["timeMs"] = round((time.perf_counter() - started) * 1000, 3)
        event["stdout"] = captured.getvalue()
        emit(event)


if __name__ == "__main__":
    main()
