#include <algorithm>
#include <vector>
class Solution {
public:
  std::vector<int> sortedListOrder(std::vector<int>& values, std::vector<int>& next, int head) {
    std::vector<int> order;
    for (int node = head; node != -1; node = next[node]) order.push_back(node);
    std::vector<int> buffer(order.size());
    for (int width = 1; width < static_cast<int>(order.size()); width *= 2) {
      for (int left = 0; left < static_cast<int>(order.size()); left += 2 * width) {
        int mid = std::min(left + width, static_cast<int>(order.size()));
        int right = std::min(left + 2 * width, static_cast<int>(order.size()));
        int i = left, j = mid, out = left;
        while (i < mid || j < right) {
          if (j == right || (i < mid && values[order[i]] <= values[order[j]])) buffer[out++] = order[i++];
          else buffer[out++] = order[j++];
        }
      }
      order.swap(buffer);
    }
    return order;
  }
};
