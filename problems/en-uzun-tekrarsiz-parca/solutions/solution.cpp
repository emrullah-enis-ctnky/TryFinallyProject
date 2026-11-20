#include <algorithm>
#include <string>
class Solution {
public:
  int longestUniqueLength(std::string text) {
    int lastSeen[26];
    for (int& value : lastSeen) value = -1;
    int left = 0, best = 0;
    for (int right = 0; right < static_cast<int>(text.size()); ++right) {
      int letter = text[right] - 'a';
      left = std::max(left, lastSeen[letter] + 1);
      lastSeen[letter] = right;
      best = std::max(best, right - left + 1);
    }
    return best;
  }
};
