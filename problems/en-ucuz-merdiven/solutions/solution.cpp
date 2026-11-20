#include <algorithm>
#include <vector>
class Solution {
public:
  long long minimumClimbCost(std::vector<int>& cost) {
    long long twoBack = 0, oneBack = 0;
    for (int i = 2; i <= static_cast<int>(cost.size()); ++i) {
      long long current = std::min(oneBack + cost[i - 1], twoBack + cost[i - 2]);
      twoBack = oneBack;
      oneBack = current;
    }
    return oneBack;
  }
};
