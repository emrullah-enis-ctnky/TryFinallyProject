#include <vector>
class Solution { public: std::vector<int> rotateLeft(std::vector<int>& nums, int k) { if (nums.empty()) return {}; int shift = k % nums.size(); std::vector<int> result; for (int i = shift; i < (int)nums.size(); ++i) result.push_back(nums[i]); for (int i = 0; i < shift; ++i) result.push_back(nums[i]); return result; } };
