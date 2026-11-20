#include <vector>
class Solution { public: int countOccurrences(std::vector<int>& nums, int target) { int count = 0; for (int value : nums) if (value == target) ++count; return count; } };
