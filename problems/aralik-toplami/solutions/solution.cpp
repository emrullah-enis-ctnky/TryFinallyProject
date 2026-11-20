#include <vector>
class Solution {
public:
  int rangeSum(std::vector<int>& nums, int left, int right) {
    std::vector<int> prefix(nums.size() + 1, 0);
    for (int i = 0; i < static_cast<int>(nums.size()); ++i) prefix[i + 1] = prefix[i] + nums[i];
    return prefix[right + 1] - prefix[left];
  }
};
