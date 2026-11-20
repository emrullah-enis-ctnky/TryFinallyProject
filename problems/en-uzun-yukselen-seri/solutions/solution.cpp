#include <vector>
class Solution {
public:
  int longestRisingRun(std::vector<int>& nums) {
    int best = 1, run = 1;
    for (int i = 1; i < static_cast<int>(nums.size()); ++i) {
      run = nums[i] > nums[i - 1] ? run + 1 : 1;
      if (run > best) best = run;
    }
    return best;
  }
};
