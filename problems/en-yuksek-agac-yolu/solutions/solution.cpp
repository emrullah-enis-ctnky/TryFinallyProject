#include <algorithm>
#include <vector>
class Solution {
public:
  int maximumTreePathSum(std::vector<int>& nodes) {
    const int empty = -2147483647 - 1;
    if (nodes.empty() || nodes[0] == empty) return 0;
    std::vector<int> order, stack(1, 0), gain(nodes.size(), 0);
    while (!stack.empty()) {
      int index = stack.back(); stack.pop_back();
      order.push_back(index);
      int left = 2 * index + 1, right = left + 1;
      if (left < static_cast<int>(nodes.size()) && nodes[left] != empty) stack.push_back(left);
      if (right < static_cast<int>(nodes.size()) && nodes[right] != empty) stack.push_back(right);
    }
    int best = -1000000000;
    for (int p = static_cast<int>(order.size()) - 1; p >= 0; --p) {
      int index = order[p], left = 2 * index + 1, right = left + 1;
      int leftGain = left < static_cast<int>(nodes.size()) && nodes[left] != empty ? std::max(0, gain[left]) : 0;
      int rightGain = right < static_cast<int>(nodes.size()) && nodes[right] != empty ? std::max(0, gain[right]) : 0;
      best = std::max(best, nodes[index] + leftGain + rightGain);
      gain[index] = nodes[index] + std::max(leftGain, rightGain);
    }
    return best;
  }
};
