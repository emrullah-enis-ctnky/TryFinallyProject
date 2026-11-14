#include <string>
#include <algorithm>

class Solution {
public:
  std::string reverseString(std::string text) {
    std::reverse(text.begin(), text.end());
    return text;
  }
};
