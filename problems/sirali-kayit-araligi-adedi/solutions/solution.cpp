#include <algorithm>
#include <vector>
class Solution {
public:
  int countCodeOccurrences(std::vector<int>& codes, int target) {
    auto first = std::lower_bound(codes.begin(), codes.end(), target);
    auto after = std::upper_bound(first, codes.end(), target);
    return static_cast<int>(after - first);
  }
};
