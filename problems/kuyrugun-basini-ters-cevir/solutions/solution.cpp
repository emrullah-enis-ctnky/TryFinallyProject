#include <vector>
class Solution {
public:
  std::vector<int> reverseQueuePrefix(std::vector<int>& items, int k) {
    std::vector<int> result;
    for (int i = k - 1; i >= 0; --i) result.push_back(items[i]);
    for (int i = k; i < static_cast<int>(items.size()); ++i) result.push_back(items[i]);
    return result;
  }
};
