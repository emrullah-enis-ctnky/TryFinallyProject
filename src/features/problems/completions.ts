import {
  autocompletion,
  completeAnyWord,
  completeFromList,
  ifNotIn,
  snippetCompletion,
  type Completion,
} from "@codemirror/autocomplete";
import { cpp, cppLanguage } from "@codemirror/lang-cpp";
import { java, javaLanguage } from "@codemirror/lang-java";
import { python, pythonLanguage } from "@codemirror/lang-python";
import type { Extension } from "@codemirror/state";
import type { SupportedLanguage } from "./types";

// ==============================================================================
// C++ Completions & Snippets (English documentation details)
// ==============================================================================
const CPP_COMPLETIONS: Completion[] = [
  // Fundamental types
  { label: "int", type: "type", detail: "32-bit signed integer" },
  { label: "long", type: "type", detail: "long integer" },
  { label: "long long", type: "type", detail: "64-bit integer" },
  { label: "short", type: "type", detail: "16-bit signed integer" },
  { label: "double", type: "type", detail: "double precision floating-point" },
  { label: "float", type: "type", detail: "single precision floating-point" },
  { label: "char", type: "type", detail: "character type" },
  { label: "bool", type: "type", detail: "boolean type" },
  { label: "void", type: "type", detail: "empty type" },
  { label: "auto", type: "keyword", detail: "type deduction" },
  { label: "size_t", type: "type", detail: "unsigned size type" },

  // Modifiers & Keywords
  { label: "const", type: "keyword", detail: "constant qualifier" },
  { label: "constexpr", type: "keyword", detail: "compile-time constant expression" },
  { label: "static", type: "keyword", detail: "static storage duration" },
  { label: "inline", type: "keyword", detail: "inline function specifier" },
  { label: "virtual", type: "keyword", detail: "virtual function specifier" },
  { label: "override", type: "keyword", detail: "override specifier" },
  { label: "unsigned", type: "keyword", detail: "unsigned integer modifier" },
  { label: "signed", type: "keyword", detail: "signed integer modifier" },
  { label: "class", type: "keyword", detail: "class definition" },
  { label: "struct", type: "keyword", detail: "struct definition" },
  { label: "enum", type: "keyword", detail: "enumeration type" },
  { label: "public", type: "keyword", detail: "public access specifier" },
  { label: "private", type: "keyword", detail: "private access specifier" },
  { label: "protected", type: "keyword", detail: "protected access specifier" },
  { label: "namespace", type: "keyword", detail: "namespace declaration" },
  { label: "using", type: "keyword", detail: "type alias or using declaration" },
  { label: "template", type: "keyword", detail: "template declaration" },
  { label: "typename", type: "keyword", detail: "template type parameter" },
  { label: "nullptr", type: "keyword", detail: "null pointer literal" },
  { label: "true", type: "keyword", detail: "boolean true literal" },
  { label: "false", type: "keyword", detail: "boolean false literal" },
  { label: "return", type: "keyword", detail: "return statement" },
  { label: "sizeof", type: "keyword", detail: "size in bytes operator" },
  { label: "this", type: "keyword", detail: "pointer to current object" },

  // Control Flow
  { label: "if", type: "keyword", detail: "conditional branch" },
  { label: "else", type: "keyword", detail: "alternative branch" },
  { label: "switch", type: "keyword", detail: "selection statement" },
  { label: "case", type: "keyword", detail: "case label in switch" },
  { label: "default", type: "keyword", detail: "default label in switch" },
  { label: "break", type: "keyword", detail: "break loop or switch" },
  { label: "continue", type: "keyword", detail: "continue to next iteration" },
  { label: "for", type: "keyword", detail: "for loop" },
  { label: "while", type: "keyword", detail: "while loop" },
  { label: "do", type: "keyword", detail: "do-while loop" },

  // STL Containers & Types
  { label: "string", type: "type", detail: "std::string character sequence" },
  { label: "vector", type: "type", detail: "std::vector dynamic array" },
  { label: "array", type: "type", detail: "std::array fixed-size sequence" },
  { label: "deque", type: "type", detail: "std::deque double-ended queue" },
  { label: "list", type: "type", detail: "std::list doubly-linked list" },
  { label: "queue", type: "type", detail: "std::queue FIFO container" },
  { label: "priority_queue", type: "type", detail: "std::priority_queue max/min heap" },
  { label: "stack", type: "type", detail: "std::stack LIFO container" },
  { label: "set", type: "type", detail: "std::set sorted unique container" },
  { label: "multiset", type: "type", detail: "std::multiset sorted multiple key container" },
  { label: "map", type: "type", detail: "std::map sorted key-value pairs" },
  { label: "multimap", type: "type", detail: "std::multimap sorted multiple keys map" },
  { label: "unordered_set", type: "type", detail: "std::unordered_set hash set" },
  { label: "unordered_map", type: "type", detail: "std::unordered_map hash table" },
  { label: "pair", type: "type", detail: "std::pair two-element tuple" },
  { label: "tuple", type: "type", detail: "std::tuple fixed-size collection" },

  // Container Methods & Member Functions
  { label: "push_back", type: "function", detail: "append element to container" },
  { label: "pop_back", type: "function", detail: "remove last element" },
  { label: "emplace_back", type: "function", detail: "construct element in-place at end" },
  { label: "push", type: "function", detail: "insert element into stack/queue" },
  { label: "pop", type: "function", detail: "remove element from stack/queue" },
  { label: "top", type: "function", detail: "access top element in stack/heap" },
  { label: "front", type: "function", detail: "access first element" },
  { label: "back", type: "function", detail: "access last element" },
  { label: "insert", type: "function", detail: "insert element(s) into container" },
  { label: "erase", type: "function", detail: "remove element(s) from container" },
  { label: "find", type: "function", detail: "find element or iterator" },
  { label: "count", type: "function", detail: "count occurrences or check presence" },
  { label: "size", type: "function", detail: "return number of elements" },
  { label: "length", type: "function", detail: "return length of string" },
  { label: "empty", type: "function", detail: "check whether container is empty" },
  { label: "clear", type: "function", detail: "clear all elements" },
  { label: "begin", type: "function", detail: "return iterator to beginning" },
  { label: "end", type: "function", detail: "return iterator to end" },
  { label: "rbegin", type: "function", detail: "return reverse iterator to beginning" },
  { label: "rend", type: "function", detail: "return reverse iterator to end" },

  // Algorithms & Math Functions
  { label: "sort", type: "function", detail: "std::sort sort elements in range" },
  { label: "reverse", type: "function", detail: "std::reverse reverse order of elements" },
  { label: "max", type: "function", detail: "std::max greater of two elements" },
  { label: "min", type: "function", detail: "std::min smaller of two elements" },
  { label: "abs", type: "function", detail: "std::abs absolute value" },
  { label: "lower_bound", type: "function", detail: "std::lower_bound first element not less" },
  { label: "upper_bound", type: "function", detail: "std::upper_bound first element greater" },
  { label: "binary_search", type: "function", detail: "std::binary_search check if element exists" },
  { label: "swap", type: "function", detail: "std::swap swap two values" },
  { label: "to_string", type: "function", detail: "std::to_string convert number to string" },
  { label: "stoi", type: "function", detail: "std::stoi convert string to integer" },
  { label: "stoll", type: "function", detail: "std::stoll convert string to long long" },
  { label: "cin", type: "variable", detail: "std::cin standard input stream" },
  { label: "cout", type: "variable", detail: "std::cout standard output stream" },
  { label: "endl", type: "variable", detail: "std::endl newline and flush stream" },

  // Snippets
  snippetCompletion("for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}", {
    label: "for",
    detail: "indexed for loop (0 to n)",
    type: "keyword",
  }),
  snippetCompletion("for (int ${i} = ${n} - 1; ${i} >= 0; ${i}--) {\n\t${}\n}", {
    label: "for-rev",
    detail: "reverse for loop (n-1 down to 0)",
    type: "keyword",
  }),
  snippetCompletion("for (const auto& ${item} : ${items}) {\n\t${}\n}", {
    label: "for-range",
    detail: "range-based for loop",
    type: "keyword",
  }),
  snippetCompletion("while (${condition}) {\n\t${}\n}", {
    label: "while",
    detail: "while loop",
    type: "keyword",
  }),
  snippetCompletion("if (${condition}) {\n\t${}\n}", {
    label: "if",
    detail: "if branch statement",
    type: "keyword",
  }),
  snippetCompletion("if (${condition}) {\n\t${}\n} else {\n\t${}\n}", {
    label: "if-else",
    detail: "if-else conditional branch",
    type: "keyword",
  }),
  snippetCompletion("std::vector<${int}> ${v};", {
    label: "vector-def",
    detail: "std::vector declaration",
    type: "type",
  }),
  snippetCompletion("std::unordered_map<${int}, ${int}> ${map};", {
    label: "map-def",
    detail: "std::unordered_map declaration",
    type: "type",
  }),
  snippetCompletion("std::unordered_set<${int}> ${set};", {
    label: "set-def",
    detail: "std::unordered_set declaration",
    type: "type",
  }),
  snippetCompletion("std::sort(${v}.begin(), ${v}.end());", {
    label: "sort-all",
    detail: "sort entire vector range",
    type: "function",
  }),
  snippetCompletion("std::reverse(${v}.begin(), ${v}.end());", {
    label: "reverse-all",
    detail: "reverse entire vector range",
    type: "function",
  }),
];

const cppCompletionSource = ifNotIn(
  ["Comment", "String"],
  completeFromList(CPP_COMPLETIONS)
);

// ==============================================================================
// Java Completions & Snippets (English documentation details)
// ==============================================================================
const JAVA_COMPLETIONS: Completion[] = [
  // Primitive types
  { label: "int", type: "type", detail: "32-bit signed integer" },
  { label: "long", type: "type", detail: "64-bit signed integer" },
  { label: "double", type: "type", detail: "64-bit IEEE 754 floating point" },
  { label: "float", type: "type", detail: "32-bit IEEE 754 floating point" },
  { label: "char", type: "type", detail: "16-bit Unicode character" },
  { label: "boolean", type: "type", detail: "boolean type (true or false)" },
  { label: "byte", type: "type", detail: "8-bit signed integer" },
  { label: "short", type: "type", detail: "16-bit signed integer" },
  { label: "void", type: "type", detail: "method returns no value" },

  // Wrapper & Core classes
  { label: "String", type: "type", detail: "immutable character sequence" },
  { label: "Integer", type: "type", detail: "boxed int wrapper" },
  { label: "Long", type: "type", detail: "boxed long wrapper" },
  { label: "Double", type: "type", detail: "boxed double wrapper" },
  { label: "Boolean", type: "type", detail: "boxed boolean wrapper" },
  { label: "Character", type: "type", detail: "boxed char wrapper" },
  { label: "StringBuilder", type: "type", detail: "mutable character sequence" },

  // Collections & Data Structures
  { label: "List", type: "type", detail: "ordered collection interface" },
  { label: "ArrayList", type: "type", detail: "resizable-array implementation of List" },
  { label: "LinkedList", type: "type", detail: "doubly-linked list implementation" },
  { label: "Map", type: "type", detail: "key-value mapping interface" },
  { label: "HashMap", type: "type", detail: "hash table based Map implementation" },
  { label: "TreeMap", type: "type", detail: "Red-Black tree based NavigableMap" },
  { label: "Set", type: "type", detail: "collection with no duplicate elements" },
  { label: "HashSet", type: "type", detail: "hash table based Set implementation" },
  { label: "Queue", type: "type", detail: "FIFO collection interface" },
  { label: "Deque", type: "type", detail: "double-ended queue interface" },
  { label: "ArrayDeque", type: "type", detail: "resizable-array Deque implementation" },
  { label: "PriorityQueue", type: "type", detail: "unbounded priority heap queue" },
  { label: "Stack", type: "type", detail: "LIFO stack of objects" },

  // Keywords & Modifiers
  { label: "public", type: "keyword", detail: "visible to all classes" },
  { label: "private", type: "keyword", detail: "visible only within declaring class" },
  { label: "protected", type: "keyword", detail: "visible within package and subclasses" },
  { label: "static", type: "keyword", detail: "belongs to class rather than instance" },
  { label: "final", type: "keyword", detail: "non-modifiable entity" },
  { label: "class", type: "keyword", detail: "class definition" },
  { label: "interface", type: "keyword", detail: "interface definition" },
  { label: "new", type: "keyword", detail: "instantiate new object" },
  { label: "return", type: "keyword", detail: "return from method" },
  { label: "this", type: "keyword", detail: "reference to current object" },
  { label: "super", type: "keyword", detail: "reference to parent class" },
  { label: "null", type: "keyword", detail: "null reference literal" },
  { label: "true", type: "keyword", detail: "boolean true literal" },
  { label: "false", type: "keyword", detail: "boolean false literal" },
  { label: "instanceof", type: "keyword", detail: "type comparison operator" },

  // Control Flow
  { label: "if", type: "keyword", detail: "conditional branch" },
  { label: "else", type: "keyword", detail: "alternative branch" },
  { label: "for", type: "keyword", detail: "for loop" },
  { label: "while", type: "keyword", detail: "while loop" },
  { label: "do", type: "keyword", detail: "do-while loop" },
  { label: "switch", type: "keyword", detail: "switch branch statement" },
  { label: "case", type: "keyword", detail: "case label in switch" },
  { label: "default", type: "keyword", detail: "default label in switch" },
  { label: "break", type: "keyword", detail: "break out of loop or switch" },
  { label: "continue", type: "keyword", detail: "continue to next iteration" },
  { label: "try", type: "keyword", detail: "try catch block" },
  { label: "catch", type: "keyword", detail: "exception handler block" },
  { label: "finally", type: "keyword", detail: "finally cleanup block" },
  { label: "throw", type: "keyword", detail: "throw an exception" },
  { label: "throws", type: "keyword", detail: "declare thrown exceptions" },

  // Collection & String Methods
  { label: "length", type: "function", detail: "array length or String length()" },
  { label: "size", type: "function", detail: "number of elements in collection" },
  { label: "get", type: "function", detail: "retrieve element at index or by key" },
  { label: "set", type: "function", detail: "replace element at specified index" },
  { label: "add", type: "function", detail: "append element to collection" },
  { label: "remove", type: "function", detail: "remove element from collection" },
  { label: "clear", type: "function", detail: "remove all elements" },
  { label: "contains", type: "function", detail: "check if element exists in collection" },
  { label: "containsKey", type: "function", detail: "check if key exists in map" },
  { label: "containsValue", type: "function", detail: "check if value exists in map" },
  { label: "isEmpty", type: "function", detail: "check if collection is empty" },
  { label: "put", type: "function", detail: "associate key with value in map" },
  { label: "getOrDefault", type: "function", detail: "get mapped value or default fallback" },
  { label: "keySet", type: "function", detail: "return set view of keys" },
  { label: "values", type: "function", detail: "return collection view of values" },
  { label: "charAt", type: "function", detail: "char value at specified index" },
  { label: "substring", type: "function", detail: "return substring of string" },
  { label: "toCharArray", type: "function", detail: "convert string to char array" },
  { label: "equals", type: "function", detail: "check object equality" },
  { label: "equalsIgnoreCase", type: "function", detail: "check case-insensitive equality" },
  { label: "compareTo", type: "function", detail: "compare two objects lexicographically" },
  { label: "toString", type: "function", detail: "string representation of object" },

  // Utility Classes & Methods
  { label: "Math.max", type: "function", detail: "greater of two numbers" },
  { label: "Math.min", type: "function", detail: "smaller of two numbers" },
  { label: "Math.abs", type: "function", detail: "absolute value of argument" },
  { label: "Math.pow", type: "function", detail: "base raised to power" },
  { label: "Math.sqrt", type: "function", detail: "correctly rounded square root" },
  { label: "Arrays.sort", type: "function", detail: "sort specified array into ascending order" },
  { label: "Arrays.fill", type: "function", detail: "assign specified value to each element" },
  { label: "Collections.sort", type: "function", detail: "sort specified list into ascending order" },
  { label: "Collections.reverse", type: "function", detail: "reverse the order of list elements" },
  { label: "System.out.println", type: "function", detail: "print line to standard console output" },

  // Snippets
  snippetCompletion("for (int ${i} = 0; ${i} < ${n}; ${i}++) {\n\t${}\n}", {
    label: "for",
    detail: "indexed for loop (0 to n)",
    type: "keyword",
  }),
  snippetCompletion("for (int ${i} = ${n} - 1; ${i} >= 0; ${i}--) {\n\t${}\n}", {
    label: "for-rev",
    detail: "reverse for loop (n-1 down to 0)",
    type: "keyword",
  }),
  snippetCompletion("for (${Type} ${item} : ${items}) {\n\t${}\n}", {
    label: "for-each",
    detail: "enhanced for-each loop",
    type: "keyword",
  }),
  snippetCompletion("while (${condition}) {\n\t${}\n}", {
    label: "while",
    detail: "while loop",
    type: "keyword",
  }),
  snippetCompletion("if (${condition}) {\n\t${}\n}", {
    label: "if",
    detail: "if branch statement",
    type: "keyword",
  }),
  snippetCompletion("if (${condition}) {\n\t${}\n} else {\n\t${}\n}", {
    label: "if-else",
    detail: "if-else conditional branch",
    type: "keyword",
  }),
  snippetCompletion("System.out.println(${});", {
    label: "sout",
    detail: "print line statement",
    type: "keyword",
  }),
  snippetCompletion("List<${Integer}> ${list} = new ArrayList<>();", {
    label: "list-def",
    detail: "ArrayList declaration",
    type: "type",
  }),
  snippetCompletion("Map<${Integer}, ${Integer}> ${map} = new HashMap<>();", {
    label: "map-def",
    detail: "HashMap declaration",
    type: "type",
  }),
  snippetCompletion("Set<${Integer}> ${set} = new HashSet<>();", {
    label: "set-def",
    detail: "HashSet declaration",
    type: "type",
  }),
];

const javaCompletionSource = ifNotIn(
  ["Comment", "String"],
  completeFromList(JAVA_COMPLETIONS)
);

// ==============================================================================
// Language Extensions Export
// ==============================================================================
export function getLanguageExtensions(language: SupportedLanguage): Extension[] {
  const commonAutocomplete = autocompletion({
    activateOnTyping: true,
    defaultKeymap: true,
  });

  switch (language) {
    case "cpp":
      return [
        cpp(),
        cppLanguage.data.of({ autocomplete: cppCompletionSource }),
        cppLanguage.data.of({ autocomplete: completeAnyWord }),
        commonAutocomplete,
      ];

    case "java":
      return [
        java(),
        javaLanguage.data.of({ autocomplete: javaCompletionSource }),
        javaLanguage.data.of({ autocomplete: completeAnyWord }),
        commonAutocomplete,
      ];

    case "python":
      return [
        python(),
        pythonLanguage.data.of({ autocomplete: completeAnyWord }),
        commonAutocomplete,
      ];

    default:
      return [cpp(), commonAutocomplete];
  }
}
