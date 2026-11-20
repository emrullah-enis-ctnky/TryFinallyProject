#include <algorithm>
#include <vector>
class Solution {
public:
  int maximumSubarraySum(std::vector<int>& changes) {
    int ending = changes[0], best = changes[0];
    for (int i = 1; i < static_cast<int>(changes.size()); ++i) {
      ending = std::max(changes[i], ending + changes[i]);
      best = std::max(best, ending);
    }
    return best;
  }
};
