#include <algorithm>
#include <vector>
class Solution {
public:
  int maxNonAdjacentSum(std::vector<int>& values) {
    int twoBack = 0, oneBack = 0;
    for (int value : values) {
      int current = std::max(oneBack, twoBack + value);
      twoBack = oneBack;
      oneBack = current;
    }
    return oneBack;
  }
};
