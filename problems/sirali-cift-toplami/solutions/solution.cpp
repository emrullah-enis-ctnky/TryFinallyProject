#include <vector>
class Solution {
public:
  bool hasPairWithSum(std::vector<int>& nums, int target) {
    int left = 0, right = static_cast<int>(nums.size()) - 1;
    while (left < right) {
      long long sum = static_cast<long long>(nums[left]) + nums[right];
      if (sum == target) return true;
      if (sum < target) ++left; else --right;
    }
    return false;
  }
};
