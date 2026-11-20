#include <queue>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> levelValues(std::vector<int>& nodes) {
    std::vector<std::vector<int>> result;
    if (nodes.empty() || nodes[0] == -1) return result;
    std::queue<int> queue;
    queue.push(0);
    while (!queue.empty()) {
      int count = static_cast<int>(queue.size());
      std::vector<int> level;
      while (count--) {
        int index = queue.front(); queue.pop();
        level.push_back(nodes[index]);
        int left = 2 * index + 1, right = left + 1;
        if (left < static_cast<int>(nodes.size()) && nodes[left] != -1) queue.push(left);
        if (right < static_cast<int>(nodes.size()) && nodes[right] != -1) queue.push(right);
      }
      result.push_back(level);
    }
    return result;
  }
};
