#include <utility>
#include <vector>
class Solution {
public:
  int countTargetSubsets(std::vector<int>& nums, int target) {
    std::vector<std::pair<int, int>> states{{0, 0}};
    int count = 0;
    while (!states.empty()) {
      auto state = states.back(); states.pop_back();
      int index = state.first, total = state.second;
      if (index == static_cast<int>(nums.size())) { if (total == target) ++count; continue; }
      states.push_back({index + 1, total});
      if (total + nums[index] <= target) states.push_back({index + 1, total + nums[index]});
    }
    return count;
  }
};
