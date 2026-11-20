#include <queue>
#include <functional>
#include <vector>
class Solution {
public:
  int kthLargest(std::vector<int>& nums, int k) {
    std::priority_queue<int, std::vector<int>, std::greater<int>> smallestOfLargest;
    for (int value : nums) {
      smallestOfLargest.push(value);
      if (static_cast<int>(smallestOfLargest.size()) > k) smallestOfLargest.pop();
    }
    return smallestOfLargest.top();
  }
};
