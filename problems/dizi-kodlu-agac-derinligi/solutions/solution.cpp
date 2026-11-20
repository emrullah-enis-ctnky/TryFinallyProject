#include <algorithm>
#include <utility>
#include <vector>
class Solution {
public:
  int treeHeight(std::vector<int>& levelOrder) {
    if (levelOrder.empty() || levelOrder[0] == -1) return 0;
    std::vector<std::pair<int, int>> stack{{0, 1}};
    int height = 0;
    while (!stack.empty()) {
      auto node = stack.back(); stack.pop_back();
      int index = node.first, depth = node.second;
      height = std::max(height, depth);
      int left = 2 * index + 1, right = left + 1;
      if (right < static_cast<int>(levelOrder.size()) && levelOrder[right] != -1) stack.push_back({right, depth + 1});
      if (left < static_cast<int>(levelOrder.size()) && levelOrder[left] != -1) stack.push_back({left, depth + 1});
    }
    return height;
  }
};
