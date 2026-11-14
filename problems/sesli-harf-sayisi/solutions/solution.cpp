#include <string>
#include <cctype>

class Solution {
public:
  int countVowels(std::string text) {
    int count = 0;
    for (char ch : text) {
      char lower = (char) std::tolower((unsigned char) ch);
      if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') count++;
    }
    return count;
  }
};
