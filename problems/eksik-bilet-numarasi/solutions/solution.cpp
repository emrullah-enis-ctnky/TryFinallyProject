#include <vector>
class Solution {
public:
  int findMissingTicket(std::vector<int>& nums) {
    int missing = static_cast<int>(nums.size());
    for (int i = 0; i < static_cast<int>(nums.size()); ++i) missing ^= i ^ nums[i];
    return missing;
  }
};
