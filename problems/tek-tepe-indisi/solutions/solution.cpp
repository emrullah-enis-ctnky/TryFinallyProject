#include <vector>
class Solution {
public:
  int peakIndex(std::vector<int>& heights) {
    int left = 0, right = static_cast<int>(heights.size()) - 1;
    while (left < right) {
      int middle = left + (right - left) / 2;
      if (heights[middle] < heights[middle + 1]) left = middle + 1;
      else right = middle;
    }
    return left;
  }
};
