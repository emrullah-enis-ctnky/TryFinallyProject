#include <string>
class Solution {
public:
  int longestLimitedAlphabetRun(std::string text, int k) {
    int counts[26] = {}, left = 0, distinct = 0, best = 0;
    for (int right = 0; right < static_cast<int>(text.size()); ++right) {
      if (counts[text[right] - 'a']++ == 0) ++distinct;
      while (distinct > k) if (--counts[text[left++] - 'a'] == 0) --distinct;
      int length = right - left + 1;
      if (length > best) best = length;
    }
    return best;
  }
};
