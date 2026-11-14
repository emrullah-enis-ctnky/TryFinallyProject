#include <vector>

class Solution {
public:
  int maxSubArray(std::vector<int>& nums) {
    // İç içe iki döngü: n = 100 000 için 5 milyar toplama
    int best = nums[0];
    for (size_t i = 0; i < nums.size(); i++) {
      int sum = 0;
      for (size_t j = i; j < nums.size(); j++) {
        sum += nums[j];
        if (sum > best) best = sum;
      }
    }
    return best;
  }
};
