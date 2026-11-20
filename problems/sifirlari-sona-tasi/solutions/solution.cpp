#include <vector>
class Solution {
public:
  std::vector<int> moveZerosToEnd(std::vector<int>& nums) {
    std::vector<int> result;
    for (int value : nums) if (value != 0) result.push_back(value);
    result.resize(nums.size(), 0);
    return result;
  }
};
