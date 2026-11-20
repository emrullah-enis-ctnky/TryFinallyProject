#include <algorithm>
#include <vector>
class Solution {
public:
  long long largestHistogramArea(std::vector<int>& heights) {
    std::vector<int> stack;
    long long best = 0;
    for (int i = 0; i <= static_cast<int>(heights.size()); ++i) {
      int current = i == static_cast<int>(heights.size()) ? 0 : heights[i];
      while (!stack.empty() && heights[stack.back()] > current) {
        int height = heights[stack.back()]; stack.pop_back();
        int left = stack.empty() ? 0 : stack.back() + 1;
        best = std::max(best, static_cast<long long>(height) * (i - left));
      }
      if (i < static_cast<int>(heights.size())) stack.push_back(i);
    }
    return best;
  }
};
