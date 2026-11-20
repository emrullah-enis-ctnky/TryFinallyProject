#include <vector>
class Solution {
public:
  bool searchEncodedBst(std::vector<int>& nodes, int target) {
    int index = 0;
    while (index < static_cast<int>(nodes.size()) && nodes[index] != -1) {
      if (nodes[index] == target) return true;
      index = 2 * index + (target < nodes[index] ? 1 : 2);
    }
    return false;
  }
};
