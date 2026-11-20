#include <algorithm>
#include <unordered_set>
#include <vector>
class Solution {
public:
  int longestConsecutiveRun(std::vector<int>& codes) {
    std::unordered_set<int> values(codes.begin(), codes.end());
    int best = 0;
    for (int value : values) if (values.count(value - 1) == 0) {
      int length = 1;
      while (values.count(value + length)) ++length;
      best = std::max(best, length);
    }
    return best;
  }
};
