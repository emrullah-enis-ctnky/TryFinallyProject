#include <string>
class Solution {
public:
  std::string longestPalindrome(std::string text) {
    int bestStart = 0, bestLength = 0, n = static_cast<int>(text.size());
    for (int center = 0; center < n; ++center) {
      for (int mode = 0; mode < 2; ++mode) {
        int left = center, right = center + mode;
        while (left >= 0 && right < n && text[left] == text[right]) {
          int length = right - left + 1;
          if (length > bestLength || (length == bestLength && left < bestStart)) { bestStart = left; bestLength = length; }
          --left; ++right;
        }
      }
    }
    return text.substr(bestStart, bestLength);
  }
};
