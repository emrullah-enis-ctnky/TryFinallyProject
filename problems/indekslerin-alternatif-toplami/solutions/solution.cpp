#include <vector>
class Solution {
public:
  int alternatingIndexSum(std::vector<int>& nums) {
    int result = 0;
    for (int i = 0; i < static_cast<int>(nums.size()); ++i)
      result += (i % 2 == 0 ? nums[i] : -nums[i]);
    return result;
  }
};
