#include <algorithm>
#include <vector>
class Solution {
public:
  std::vector<int> sortPartColors(std::vector<int>& colors) {
    std::vector<int> result = colors;
    int low = 0, current = 0, high = static_cast<int>(result.size()) - 1;
    while (current <= high) {
      if (result[current] == 0) std::swap(result[low++], result[current++]);
      else if (result[current] == 2) std::swap(result[current], result[high--]);
      else ++current;
    }
    return result;
  }
};
