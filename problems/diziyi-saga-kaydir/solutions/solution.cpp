#include <vector>
class Solution {
public:
  std::vector<int> rotateRight(std::vector<int>& nums, int k) {
    int n = static_cast<int>(nums.size()), shift = k % n;
    std::vector<int> result(n);
    for (int i = 0; i < n; ++i) result[(i + shift) % n] = nums[i];
    return result;
  }
};
