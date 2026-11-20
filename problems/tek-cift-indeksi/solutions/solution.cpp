#include <unordered_map>
#include <vector>
class Solution {
public:
  std::vector<int> findPairIndices(std::vector<int>& nums, int target) {
    std::unordered_map<int, int> firstIndex;
    for (int i = 0; i < static_cast<int>(nums.size()); ++i) {
      auto found = firstIndex.find(target - nums[i]);
      if (found != firstIndex.end()) return {found->second, i};
      if (firstIndex.find(nums[i]) == firstIndex.end()) firstIndex[nums[i]] = i;
    }
    return {};
  }
};
