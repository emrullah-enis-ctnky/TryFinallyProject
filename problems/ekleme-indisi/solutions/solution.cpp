#include <vector>
class Solution {
public:
  int insertionIndex(std::vector<int>& nums, int target) {
    int left = 0, right = static_cast<int>(nums.size());
    while (left < right) {
      int middle = left + (right - left) / 2;
      if (nums[middle] < target) left = middle + 1; else right = middle;
    }
    return left;
  }
};
