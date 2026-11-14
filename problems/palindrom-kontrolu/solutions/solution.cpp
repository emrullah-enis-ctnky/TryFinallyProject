#include <string>

class Solution {
public:
  bool isPalindrome(std::string text) {
    return std::string(text.rbegin(), text.rend()) == text;
  }
};
