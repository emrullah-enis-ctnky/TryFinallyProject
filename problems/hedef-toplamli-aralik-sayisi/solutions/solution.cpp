#include <unordered_map>
#include <vector>
class Solution {
public:
  long long countTargetRanges(std::vector<int>& values, int target) {
    std::unordered_map<long long, long long> seen;
    seen[0] = 1;
    long long prefix = 0, result = 0;
    for (int value : values) {
      prefix += value;
      auto found = seen.find(prefix - target);
      if (found != seen.end()) result += found->second;
      ++seen[prefix];
    }
    return result;
  }
};
