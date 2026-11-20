#include <algorithm>
#include <vector>
class Solution {
public:
  std::vector<int> reverseListValues(std::vector<int>& values, std::vector<int>& next, int head) {
    std::vector<int> result;
    for (int node = head; node != -1; node = next[node]) result.push_back(values[node]);
    std::reverse(result.begin(), result.end());
    return result;
  }
};
