#include <vector>
class Solution {
public:
  int searchFirst(std::vector<int>& nums, int target) {
    int left = 0, right = static_cast<int>(nums.size());
    while (left < right) { int mid = left + (right - left) / 2; if (nums[mid] < target) left = mid + 1; else right = mid; }
    return left < static_cast<int>(nums.size()) && nums[left] == target ? left : -1;
  }
};
