#include <stack>
#include <vector>
class Solution {
public:
  int kthSmallestBst(std::vector<int>& nodes, int k) {
    std::stack<int> stack;
    int index = 0;
    while (index < static_cast<int>(nodes.size()) || !stack.empty()) {
      while (index < static_cast<int>(nodes.size()) && nodes[index] != -1) {
        stack.push(index);
        index = 2 * index + 1;
      }
      index = stack.top(); stack.pop();
      if (--k == 0) return nodes[index];
      index = 2 * index + 2;
    }
    return -1;
  }
};
