/**
 * Başlangıç kodundan (starter code) çağrılacak metodun adını ve tiplerini okur.
 *
 * Örnek: "std::vector<int> twoSum(std::vector<int>& nums, int target) {"
 *   -> { name: "twoSum", params: [vector<int>, int], returns: vector<int> }
 *
 * C++ ve Java'da driver kodu tipleri bilmek zorunda. Python'da sadece metot adı yeterli.
 */

import type { JudgeLanguage } from "../../src/features/judge/types.ts";

/** Judge'ın desteklediği tipler. array = C++ vector / Java dizisi, list = Java List. */
export type ValueType =
  | { kind: "int" }
  | { kind: "long" }
  | { kind: "double" }
  | { kind: "bool" }
  | { kind: "string" }
  | { kind: "array"; of: ValueType }
  | { kind: "list"; of: ValueType };

export interface MethodParam {
  name: string;
  type: ValueType;
}

export interface MethodSignature {
  name: string;
  params: MethodParam[];
  /** Python'da tip bilgisi yok, null kalır. */
  returns: ValueType | null;
}

export class UnsupportedSignatureError extends Error {}

const SUPPORTED_HINT =
  "Desteklenen tipler: int, long, double, bool, string ve bunların dizileri/listeleri (iç içe olabilir).";

/** "a, vector<pair<int,int>> b" gibi metinleri sadece en dıştaki virgüllerden böler. */
function splitTopLevel(text: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  for (const char of text) {
    if (char === "<") depth += 1;
    if (char === ">") depth -= 1;
    if (char === "," && depth === 0) {
      parts.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  if (current.trim()) parts.push(current);
  return parts.map((part) => part.trim()).filter(Boolean);
}

/** "std::vector<int>& nums" -> { type: "std::vector<int>&", name: "nums" } */
function splitParam(param: string): { typeText: string; name: string } {
  const match = param.match(/^(.*?)([A-Za-z_]\w*)\s*$/s);
  if (!match || !match[1].trim()) throw new UnsupportedSignatureError(`Parametre okunamadı: "${param}"`);
  return { typeText: match[1].trim(), name: match[2] };
}

function parseCppType(raw: string): ValueType {
  const text = raw
    .replace(/\bconst\b/g, "")
    .replace(/std::/g, "")
    .replace(/[&*]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const vector = text.match(/^vector\s*<(.+)>$/);
  if (vector) return { kind: "array", of: parseCppType(vector[1]) };
  switch (text) {
    case "int":
      return { kind: "int" };
    case "long":
    case "long long":
    case "long long int":
      return { kind: "long" };
    case "double":
    case "float":
      return { kind: "double" };
    case "bool":
      return { kind: "bool" };
    case "string":
      return { kind: "string" };
    default:
      throw new UnsupportedSignatureError(`Desteklenmeyen C++ tipi: "${raw.trim()}". ${SUPPORTED_HINT}`);
  }
}

function parseJavaType(raw: string): ValueType {
  const text = raw.replace(/\s+/g, "").trim();
  if (text.endsWith("[]")) return { kind: "array", of: parseJavaType(text.slice(0, -2)) };
  const list = text.match(/^(?:List|ArrayList)<(.+)>$/);
  if (list) return { kind: "list", of: parseJavaType(list[1]) };
  switch (text) {
    case "int":
    case "Integer":
      return { kind: "int" };
    case "long":
    case "Long":
      return { kind: "long" };
    case "double":
    case "Double":
    case "float":
    case "Float":
      return { kind: "double" };
    case "boolean":
    case "Boolean":
      return { kind: "bool" };
    case "String":
      return { kind: "string" };
    default:
      throw new UnsupportedSignatureError(`Desteklenmeyen Java tipi: "${raw.trim()}". ${SUPPORTED_HINT}`);
  }
}

const NOT_METHOD_NAMES = new Set(["if", "for", "while", "switch", "return", "catch", "Solution"]);

function parseTyped(code: string, pattern: RegExp, parseType: (raw: string) => ValueType): MethodSignature {
  for (const match of code.matchAll(pattern)) {
    const [, returnText, name, paramsText] = match;
    if (NOT_METHOD_NAMES.has(name)) continue;
    const params = splitTopLevel(paramsText).map((param) => {
      const { typeText, name: paramName } = splitParam(param);
      return { name: paramName, type: parseType(typeText) };
    });
    if (/^\s*void\s*$/.test(returnText)) {
      throw new UnsupportedSignatureError(`"${name}" metodu void döndürüyor; judge sadece değer döndüren metotları destekler.`);
    }
    return { name, params, returns: parseType(returnText) };
  }
  throw new UnsupportedSignatureError("Başlangıç kodunda Solution sınıfının metodu bulunamadı.");
}

export function parseSignature(language: JudgeLanguage, starterCode: string): MethodSignature {
  if (language === "python") {
    const match = starterCode.match(/^\s*def\s+([A-Za-z_]\w*)\s*\(\s*self\s*(?:,([^)]*))?\)/m);
    if (!match) throw new UnsupportedSignatureError("Python başlangıç kodunda 'def metot(self, ...)' bulunamadı.");
    const params = splitTopLevel(match[2] ?? "").map((param) => ({
      name: param.split(/[:=]/)[0].trim(),
      type: { kind: "int" } as ValueType, // Python'da tip kullanılmıyor
    }));
    return { name: match[1], params, returns: null };
  }
  if (language === "cpp") {
    // ör. "  std::vector<int> twoSum(std::vector<int>& nums, int target) {"
    const pattern = /^[ \t]*(?:public:\s*)?(?:static\s+|inline\s+|virtual\s+)*([A-Za-z_][\w:<>,\s&*]*?)\s*\b([A-Za-z_]\w*)\s*\(([^)]*)\)\s*(?:const\s*)?\{/gm;
    return parseTyped(starterCode, pattern, parseCppType);
  }
  // ör. "  public int[] twoSum(int[] nums, int target) {"
  const pattern = /^[ \t]*public\s+(?:static\s+|final\s+)*([\w<>[\],\s]+?)\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*(?:throws[^{]*)?\{/gm;
  return parseTyped(starterCode, pattern, parseJavaType);
}
