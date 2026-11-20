#include <deque>
#include <vector>
class Solution {
public:
  long long sumWindowMaximums(std::vector<int>& nums, int k) {
    std::deque<int> indices;
    long long total = 0;
    for (int i = 0; i < static_cast<int>(nums.size()); ++i) {
      while (!indices.empty() && indices.front() <= i - k) indices.pop_front();
      while (!indices.empty() && nums[indices.back()] <= nums[i]) indices.pop_back();
      indices.push_back(i);
      if (i >= k - 1) total += nums[indices.front()];
    }
    return total;
  }
};
