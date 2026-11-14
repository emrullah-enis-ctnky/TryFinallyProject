/**
 * Kullanıcı kodunu, dilin "driver" koduyla birleştirip konteynere konacak dosyaları üretir.
 *
 * Kural: kullanıcının kodu dosyanın EN BAŞINDA durur, böylece hata mesajlarındaki
 * satır numaraları editördeki satırlarla aynı olur.
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import type { JudgeLanguage } from "../../src/features/judge/types.ts";
import type { MethodSignature, ValueType } from "./signature.ts";

// Judge komutları (npm run judge:...) her zaman proje kök klasöründen çalışır.
const RUNTIMES_DIR = process.env.JUDGE_RUNTIMES_DIR ?? path.join(process.cwd(), "judge", "runtimes");

function runtimeFile(...parts: string[]): string {
  return readFileSync(path.join(RUNTIMES_DIR, ...parts), "utf8");
}

export interface GeneratedProgram {
  /** Çalışma klasörüne yazılacak dosyalar: dosya adı -> içerik */
  files: Record<string, string>;
}

// ------------------------------------------------------------------------------
// C++
// ------------------------------------------------------------------------------
function cppType(type: ValueType): string {
  switch (type.kind) {
    case "int":
      return "int";
    case "long":
      return "long long";
    case "double":
      return "double";
    case "bool":
      return "bool";
    case "string":
      return "std::string";
    case "array":
    case "list":
      return `std::vector<${cppType(type.of)}>`;
  }
}

function cppProgram(code: string, signature: MethodSignature): GeneratedProgram {
  const conversions = signature.params
    .map((param, index) => `    auto a${index} = judge::from_json<${cppType(param.type)}>(args.at(${index}));`)
    .join("\n");
  const call = signature.params.map((_, index) => `a${index}`).join(", ");

  const main = [
    "#include <bits/stdc++.h>",
    "using namespace std;",
    '#line 1 "solution.cpp"', // derleyici hatalarında satır 1 = kullanıcının ilk satırı
    code,
    '#line 1 "judge_main.cpp"',
    '#include "judge_io.hpp"',
    "int main() {",
    "  return judge::run_all([](const judge::Json& args) -> std::string {",
    conversions,
    "    Solution solution;",
    `    return judge::to_json(solution.${signature.name}(${call}));`,
    "  });",
    "}",
    "",
  ].join("\n");

  return { files: { "main.cpp": main, "judge_io.hpp": runtimeFile("cpp", "judge_io.hpp") } };
}

// ------------------------------------------------------------------------------
// Java
// ------------------------------------------------------------------------------
function javaBoxedType(type: ValueType): string {
  switch (type.kind) {
    case "int":
      return "Integer";
    case "long":
      return "Long";
    case "double":
      return "Double";
    case "bool":
      return "Boolean";
    case "string":
      return "String";
    case "array":
      return `${javaArrayType(type.of)}[]`;
    case "list":
      return `List<${javaBoxedType(type.of)}>`;
  }
}

function javaArrayType(type: ValueType): string {
  switch (type.kind) {
    case "int":
      return "int";
    case "long":
      return "long";
    case "double":
      return "double";
    case "bool":
      return "boolean";
    default:
      return javaBoxedType(type);
  }
}

/** JSON değerini (Object) Java tipine çeviren ifadeyi üretir. */
function javaConvert(type: ValueType, expr: string, depth = 0): string {
  const item = `x${depth}`;
  switch (type.kind) {
    case "int":
      return `JudgeIO.asInt(${expr})`;
    case "long":
      return `JudgeIO.asLong(${expr})`;
    case "double":
      return `JudgeIO.asDouble(${expr})`;
    case "bool":
      return `JudgeIO.asBool(${expr})`;
    case "string":
      return `JudgeIO.asString(${expr})`;
    case "list":
      return `JudgeIO.asList(${expr}).stream().<${javaBoxedType(type.of)}>map(${item} -> ${javaConvert(type.of, item, depth + 1)}).collect(Collectors.toCollection(ArrayList::new))`;
    case "array": {
      const stream = `JudgeIO.asList(${expr}).stream()`;
      switch (type.of.kind) {
        case "int":
          return `${stream}.mapToInt(${item} -> JudgeIO.asInt(${item})).toArray()`;
        case "long":
          return `${stream}.mapToLong(${item} -> JudgeIO.asLong(${item})).toArray()`;
        case "double":
          return `${stream}.mapToDouble(${item} -> JudgeIO.asDouble(${item})).toArray()`;
        case "bool":
          return `JudgeIO.asBoolArray(${expr})`;
        case "list":
          throw new Error("Java'da List dizisi (List<T>[]) desteklenmiyor.");
        default:
          return `${stream}.map(${item} -> ${javaConvert(type.of, item, depth + 1)}).toArray(${javaArrayType(type.of)}[]::new)`;
      }
    }
  }
}

function javaProgram(code: string, signature: MethodSignature): GeneratedProgram {
  const conversions = signature.params
    .map((param, index) => `            var a${index} = ${javaConvert(param.type, `args.get(${index})`)};`)
    .join("\n");
  const call = signature.params.map((_, index) => `a${index}`).join(", ");

  const main = [
    "import java.util.*;",
    "import java.util.stream.*;",
    "",
    "public class Main {",
    "    public static void main(String[] ignored) throws Exception {",
    "        JudgeIO.run(args -> {",
    conversions,
    `            return JudgeIO.toJson(new Solution().${signature.name}(${call}));`,
    "        });",
    "    }",
    "}",
    "",
  ].join("\n");

  // Importları kullanıcının ilk satırının BAŞINA ekliyoruz; yeni satır açmadığımız için satır numaraları kaymaz.
  const solution = `import java.util.*; import java.util.stream.*; ${code}`;

  return {
    files: {
      "Solution.java": solution,
      "Main.java": main,
      "JudgeIO.java": runtimeFile("java", "JudgeIO.java"),
    },
  };
}

// ------------------------------------------------------------------------------
// Python
// ------------------------------------------------------------------------------
function pythonProgram(code: string): GeneratedProgram {
  return { files: { "solution.py": code, "driver.py": runtimeFile("python", "driver.py") } };
}

export function generateProgram(language: JudgeLanguage, code: string, signature: MethodSignature): GeneratedProgram {
  switch (language) {
    case "cpp":
      return cppProgram(code, signature);
    case "java":
      return javaProgram(code, signature);
    case "python":
      return pythonProgram(code);
  }
}
