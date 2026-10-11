import { autocompletion, completeAnyWord } from "@codemirror/autocomplete";
import { cpp, cppLanguage } from "@codemirror/lang-cpp";
import { java, javaLanguage } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import type { Extension } from "@codemirror/state";
import type { SupportedLanguage } from "./types";

/**
 * CodeMirror'ın tamamen yerleşik dil desteği ve otomatik tamamlama motorunu döndürür.
 * Elle yazılmış statik listeler yerine dillerin ve CodeMirror'ın resmi yerleşik
 * kaynakları (ör. Python local/global tamamlama, lezer sözdizimi ve kelime tamamlama) kullanılır.
 */
export function getLanguageExtensions(language: SupportedLanguage): Extension[] {
  const commonAutocomplete = autocompletion({
    activateOnTyping: true,
    defaultKeymap: true,
  });

  switch (language) {
    case "cpp":
      return [
        cpp(),
        cppLanguage.data.of({ autocomplete: completeAnyWord }),
        commonAutocomplete,
      ];
    case "java":
      return [
        java(),
        javaLanguage.data.of({ autocomplete: completeAnyWord }),
        commonAutocomplete,
      ];
    case "python":
      return [
        python(),
        commonAutocomplete,
      ];
    default:
      return [cpp(), commonAutocomplete];
  }
}
