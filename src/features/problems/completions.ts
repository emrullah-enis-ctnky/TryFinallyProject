import {
  autocompletion,
  completeAnyWord,
  completeFromList,
  snippetCompletion,
  type Completion,
} from "@codemirror/autocomplete";
import { cpp, cppLanguage } from "@codemirror/lang-cpp";
import { java, javaLanguage } from "@codemirror/lang-java";
import { python, pythonLanguage } from "@codemirror/lang-python";
import type { Extension } from "@codemirror/state";
import type { SupportedLanguage } from "./types";

// ==============================================================================
// C++ Otomatik Tamamlama ve Kod Snippet'ları
// ==============================================================================
const CPP_COMPLETIONS: Completion[] = [
  // Tipler & Anahtar Kelimeler
  { label: "int", type: "type", detail: "Tam sayı tipi (32-bit)" },
  { label: "long", type: "type", detail: "Geniş tam sayı tipi" },
  { label: "long long", type: "type", detail: "64-bit tam sayı tipi" },
  { label: "double", type: "type", detail: "Kayan noktalı sayı tipi" },
  { label: "float", type: "type", detail: "Tek duyarlıklı kayan noktalı" },
  { label: "char", type: "type", detail: "Karakter tipi" },
  { label: "bool", type: "type", detail: "Mantıksal (true/false) tip" },
  { label: "void", type: "type", detail: "Değer döndürmeyen tip" },
  { label: "auto", type: "keyword", detail: "Otomatik tip çıkarımı" },
  { label: "const", type: "keyword", detail: "Sabit değişken tanımlayıcı" },
  { label: "return", type: "keyword", detail: "Değer döndürme" },
  { label: "nullptr", type: "keyword", detail: "Boş gösterici sabiti" },
  { label: "true", type: "keyword", detail: "Doğru mantıksal sabiti" },
  { label: "false", type: "keyword", detail: "Yanlış mantıksal sabiti" },
  { label: "class", type: "keyword", detail: "Sınıf tanımlama" },
  { label: "public", type: "keyword", detail: "Açık erişim belirteci" },
  { label: "private", type: "keyword", detail: "Gizli erişim belirteci" },
  { label: "vector", type: "type", detail: "std::vector dinamik dizi" },
  { label: "string", type: "type", detail: "std::string metin sınıfı" },
  { label: "unordered_map", type: "type", detail: "std::unordered_map hash tablosu" },
  { label: "unordered_set", type: "type", detail: "std::unordered_set küme" },
  { label: "map", type: "type", detail: "std::map sıralı ağaç haritası" },
  { label: "set", type: "type", detail: "std::set sıralı küme" },
  { label: "pair", type: "type", detail: "std::pair ikili veri tutucu" },
  { label: "queue", type: "type", detail: "std::queue kuyruk veri yapısı" },
  { label: "stack", type: "type", detail: "std::stack yığıt veri yapısı" },

  // Sık Kullanılan Fonksiyonlar & Algoritmalar
  { label: "push_back", type: "function", detail: "Vektör sonuna eleman ekle" },
  { label: "pop_back", type: "function", detail: "Vektör sonundaki elemanı çıkar" },
  { label: "size", type: "function", detail: "Eleman sayısını döndürür" },
  { label: "empty", type: "function", detail: "Konteyner boş mu kontrolü" },
  { label: "clear", type: "function", detail: "Tüm elemanları temizle" },
  { label: "begin", type: "function", detail: "Başlangıç yineleyicisi (iterator)" },
  { label: "end", type: "function", detail: "Bitiş yineleyicisi (iterator)" },
  { label: "sort", type: "function", detail: "std::sort sıralama fonksiyonu" },
  { label: "max", type: "function", detail: "std::max en büyük değeri bulur" },
  { label: "min", type: "function", detail: "std::min en küçük değeri bulur" },
  { label: "reverse", type: "function", detail: "std::reverse elemanları ters çevirir" },

  // Pratik Kod İskeletleri (Snippets)
  snippetCompletion("for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}", {
    label: "for",
    detail: "İndisli for döngüsü",
    type: "keyword",
  }),
  snippetCompletion("for (const auto& ${item} : ${items}) {\n\t${}\n}", {
    label: "for-each",
    detail: "Aralık bazlı for döngüsü",
    type: "keyword",
  }),
  snippetCompletion("while (${condition}) {\n\t${}\n}", {
    label: "while",
    detail: "while döngüsü",
    type: "keyword",
  }),
  snippetCompletion("if (${condition}) {\n\t${}\n}", {
    label: "if",
    detail: "if koşul bloğu",
    type: "keyword",
  }),
  snippetCompletion("if (${condition}) {\n\t${}\n} else {\n\t${}\n}", {
    label: "if-else",
    detail: "if-else koşul bloğu",
    type: "keyword",
  }),
  snippetCompletion("std::vector<${int}> ${v};", {
    label: "vector-init",
    detail: "Vektör tanımlama",
    type: "type",
  }),
  snippetCompletion("std::unordered_map<${int}, ${int}> ${map};", {
    label: "map-init",
    detail: "Hash Map tanımlama",
    type: "type",
  }),
];

// ==============================================================================
// Java Otomatik Tamamlama ve Kod Snippet'ları
// ==============================================================================
const JAVA_COMPLETIONS: Completion[] = [
  // Tipler & Anahtar Kelimeler
  { label: "int", type: "type", detail: "İlkel tam sayı (32-bit)" },
  { label: "long", type: "type", detail: "İlkel 64-bit tam sayı" },
  { label: "double", type: "type", detail: "İlkel kayan noktalı sayı" },
  { label: "float", type: "type", detail: "İlkel tek duyarlıklı sayı" },
  { label: "char", type: "type", detail: "İlkel karakter tipi" },
  { label: "boolean", type: "type", detail: "İlkel mantıksal tip" },
  { label: "void", type: "type", detail: "Dönüş değeri yok" },
  { label: "String", type: "type", detail: "Java Metin sınıfı" },
  { label: "Integer", type: "type", detail: "Sarmalayıcı tam sayı sınıfı" },
  { label: "Double", type: "type", detail: "Sarmalayıcı kayan noktalı sınıfı" },
  { label: "Boolean", type: "type", detail: "Sarmalayıcı mantıksal sınıfı" },
  { label: "List", type: "type", detail: "java.util.List arayüzü" },
  { label: "ArrayList", type: "type", detail: "java.util.ArrayList dinamik dizi" },
  { label: "Map", type: "type", detail: "java.util.Map arayüzü" },
  { label: "HashMap", type: "type", detail: "java.util.HashMap tablosu" },
  { label: "Set", type: "type", detail: "java.util.Set arayüzü" },
  { label: "HashSet", type: "type", detail: "java.util.HashSet kümesi" },
  { label: "StringBuilder", type: "type", detail: "Değiştirilebilir karakter katarı" },
  { label: "return", type: "keyword", detail: "Değer döndürme" },
  { label: "null", type: "keyword", detail: "Boş referans" },
  { label: "true", type: "keyword", detail: "Doğru mantıksal sabiti" },
  { label: "false", type: "keyword", detail: "Yanlış mantıksal sabiti" },
  { label: "public", type: "keyword", detail: "Genel erişim belirteci" },
  { label: "private", type: "keyword", detail: "Özel erişim belirteci" },
  { label: "static", type: "keyword", detail: "Statik üye belirteci" },
  { label: "new", type: "keyword", detail: "Yeni nesne oluşturma" },

  // Metotlar & Yardımcılar
  { label: "length", type: "function", detail: "Dizi veya metin uzunluğu" },
  { label: "size", type: "function", detail: "Koleksiyon eleman sayısı" },
  { label: "get", type: "function", detail: "Eleman veya değer alma" },
  { label: "put", type: "function", detail: "Haritaya anahtar-değer ekleme" },
  { label: "add", type: "function", detail: "Listeye eleman ekleme" },
  { label: "remove", type: "function", detail: "Eleman çıkarma" },
  { label: "containsKey", type: "function", detail: "Haritada anahtar var mı?" },
  { label: "contains", type: "function", detail: "Koleksiyonda eleman var mı?" },
  { label: "isEmpty", type: "function", detail: "Koleksiyon boş mu?" },
  { label: "charAt", type: "function", detail: "İndisteki karakteri alma" },
  { label: "toCharArray", type: "function", detail: "Karakter dizisine dönüştürme" },
  { label: "substring", type: "function", detail: "Alt metin kesiti alma" },
  { label: "equals", type: "function", detail: "Nesne eşitliği denetimi" },
  { label: "Math.max", type: "function", detail: "İki değerin büyüğünü döndürür" },
  { label: "Math.min", type: "function", detail: "İki değerin küçüğünü döndürür" },
  { label: "Math.abs", type: "function", detail: "Mutlak değer döndürür" },
  { label: "Arrays.sort", type: "function", detail: "Diziyi sıralar" },

  // Pratik Kod İskeletleri (Snippets)
  snippetCompletion("for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}", {
    label: "for",
    detail: "İndisli for döngüsü",
    type: "keyword",
  }),
  snippetCompletion("for (${Type} ${item} : ${items}) {\n\t${}\n}", {
    label: "for-each",
    detail: "Gelişmiş for döngüsü",
    type: "keyword",
  }),
  snippetCompletion("while (${condition}) {\n\t${}\n}", {
    label: "while",
    detail: "while döngüsü",
    type: "keyword",
  }),
  snippetCompletion("if (${condition}) {\n\t${}\n}", {
    label: "if",
    detail: "if koşul bloğu",
    type: "keyword",
  }),
  snippetCompletion("Map<${Integer}, ${Integer}> ${map} = new HashMap<>();", {
    label: "map-init",
    detail: "HashMap tanımlama",
    type: "type",
  }),
  snippetCompletion("List<${Integer}> ${list} = new ArrayList<>();", {
    label: "list-init",
    detail: "ArrayList tanımlama",
    type: "type",
  }),
];

// ==============================================================================
// Python Otomatik Tamamlama ve Kod Snippet'ları
// ==============================================================================
const PYTHON_COMPLETIONS: Completion[] = [
  // Anahtar Kelimeler & Yerleşikler (Built-ins)
  { label: "def", type: "keyword", detail: "Fonksiyon tanımlama" },
  { label: "class", type: "keyword", detail: "Sınıf tanımlama" },
  { label: "return", type: "keyword", detail: "Değer döndürme" },
  { label: "if", type: "keyword", detail: "Koşul ifadesi" },
  { label: "elif", type: "keyword", detail: "Ek koşul ifadesi" },
  { label: "else", type: "keyword", detail: "Aksi halde bloğu" },
  { label: "for", type: "keyword", detail: "Döngü ifadesi" },
  { label: "while", type: "keyword", detail: "while döngüsü" },
  { label: "in", type: "keyword", detail: "İçerme operatörü" },
  { label: "not", type: "keyword", detail: "Mantıksal değil" },
  { label: "and", type: "keyword", detail: "Mantıksal ve" },
  { label: "or", type: "keyword", detail: "Mantıksal veya" },
  { label: "None", type: "keyword", detail: "Boş değer sabiti" },
  { label: "True", type: "keyword", detail: "Doğru mantıksal sabiti" },
  { label: "False", type: "keyword", detail: "Yanlış mantıksal sabiti" },
  { label: "self", type: "variable", detail: "Sınıf örnek referansı" },
  { label: "break", type: "keyword", detail: "Döngüyü sonlandır" },
  { label: "continue", type: "keyword", detail: "Döngü adımını atla" },
  { label: "pass", type: "keyword", detail: "Boş işlem yer tutucusu" },

  // Gömülü Fonksiyonlar (Built-in Functions)
  { label: "len", type: "function", detail: "Uzunluk / eleman sayısı" },
  { label: "range", type: "function", detail: "Sayı aralığı üretici" },
  { label: "enumerate", type: "function", detail: "İndis ve eleman çifti üretici" },
  { label: "zip", type: "function", detail: "Koleksiyonları fermuar gibi birleştirir" },
  { label: "min", type: "function", detail: "En küçük değeri bulur" },
  { label: "max", type: "function", detail: "En büyük değeri bulur" },
  { label: "sum", type: "function", detail: "Koleksiyon elemanlarını toplar" },
  { label: "sorted", type: "function", detail: "Yeni sıralı liste döndürür" },
  { label: "reversed", type: "function", detail: "Tersine çevrilmiş yineleyici" },
  { label: "int", type: "type", detail: "Tam sayı dönüştürücü" },
  { label: "str", type: "type", detail: "Metin dönüştürücü" },
  { label: "float", type: "type", detail: "Kayan noktalı sayı" },
  { label: "bool", type: "type", detail: "Mantıksal değer" },
  { label: "list", type: "type", detail: "Liste oluşturucu" },
  { label: "dict", type: "type", detail: "Sözlük oluşturucu" },
  { label: "set", type: "type", detail: "Küme oluşturucu" },
  { label: "tuple", type: "type", detail: "Demet oluşturucu" },

  // Liste ve Sözlük Metotları
  { label: "append", type: "function", detail: "Listeye eleman ekleme" },
  { label: "pop", type: "function", detail: "Eleman çıkarıp döndürme" },
  { label: "insert", type: "function", detail: "Belirli indise eleman ekleme" },
  { label: "get", type: "function", detail: "Sözlükten güvenli değer alma" },
  { label: "items", type: "function", detail: "Sözlük anahtar-değer çiftleri" },
  { label: "keys", type: "function", detail: "Sözlük anahtarları" },
  { label: "values", type: "function", detail: "Sözlük değerleri" },

  // Pratik Kod İskeletleri (Snippets)
  snippetCompletion("for ${i} in range(len(${nums})):\n\t${}", {
    label: "for-range",
    detail: "range ile for döngüsü",
    type: "keyword",
  }),
  snippetCompletion("for ${i}, ${val} in enumerate(${nums}):\n\t${}", {
    label: "for-enum",
    detail: "enumerate ile for döngüsü",
    type: "keyword",
  }),
  snippetCompletion("for ${item} in ${items}:\n\t${}", {
    label: "for-in",
    detail: "Elemanlar üzerinde for döngüsü",
    type: "keyword",
  }),
  snippetCompletion("if ${condition}:\n\t${}", {
    label: "if",
    detail: "if koşul bloğu",
    type: "keyword",
  }),
  snippetCompletion("if ${condition}:\n\t${}\nelse:\n\t${}", {
    label: "if-else",
    detail: "if-else koşul bloğu",
    type: "keyword",
  }),
  snippetCompletion("[${x} for ${x} in ${items} if ${condition}]", {
    label: "list-comp",
    detail: "List comprehension (Liste üreteci)",
    type: "function",
  }),
];

/**
 * Seçilen dile göre CodeMirror eklenti listesini döndürür.
 * Dil sözdizimi, zengin otomatik tamamlama ve dosyadaki kelimeleri tamamlama desteği içerir.
 */
export function getLanguageExtensions(language: SupportedLanguage): Extension[] {
  let langExtension: Extension;
  let completions: Completion[];

  switch (language) {
    case "cpp":
      langExtension = cpp();
      completions = CPP_COMPLETIONS;
      break;
    case "java":
      langExtension = java();
      completions = JAVA_COMPLETIONS;
      break;
    case "python":
      langExtension = python();
      completions = PYTHON_COMPLETIONS;
      break;
    default:
      langExtension = cpp();
      completions = CPP_COMPLETIONS;
      break;
  }

  const customSource = completeFromList(completions);
  const autocompleteExtension = autocompletion({
    activateOnTyping: true,
    defaultKeymap: true,
    override: [customSource, completeAnyWord],
  });

  return [langExtension, autocompleteExtension];
}
