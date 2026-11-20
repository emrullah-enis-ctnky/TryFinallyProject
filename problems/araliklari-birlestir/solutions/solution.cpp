#include <algorithm>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> mergeIntervals(std::vector<std::vector<int>>& intervals) {
    std::sort(intervals.begin(), intervals.end(), [](const auto& a, const auto& b) { return a[0] < b[0]; });
    std::vector<std::vector<int>> merged;
    for (const auto& interval : intervals) {
      if (merged.empty() || interval[0] > merged.back()[1]) merged.push_back(interval);
      else merged.back()[1] = std::max(merged.back()[1], interval[1]);
    }
    return merged;
  }
};
