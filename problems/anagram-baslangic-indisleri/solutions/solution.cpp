#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> anagramStartIndices(std::string text, std::string pattern) {
    std::vector<int> result;
    if (text.size() < pattern.size()) return result;
    int wanted[26] = {}, window[26] = {};
    for (char ch : pattern) ++wanted[ch - 'a'];
    for (int i = 0; i < static_cast<int>(pattern.size()); ++i) ++window[text[i] - 'a'];
    for (int start = 0; start + static_cast<int>(pattern.size()) <= static_cast<int>(text.size()); ++start) {
      bool same = true;
      for (int letter = 0; letter < 26; ++letter) if (wanted[letter] != window[letter]) { same = false; break; }
      if (same) result.push_back(start);
      if (start + static_cast<int>(pattern.size()) < static_cast<int>(text.size())) {
        --window[text[start] - 'a'];
        ++window[text[start + pattern.size()] - 'a'];
      }
    }
    return result;
  }
};
