#include <algorithm>
#include <vector>
class Solution {
public:
  long long maximumCircularLightValue(std::vector<int>& values) {
    if (values.size() == 1) return values[0];
    long long twoBack = 0, oneBack = 0;
    for (int i = 0; i < static_cast<int>(values.size()) - 1; ++i) {
      long long current = std::max(oneBack, twoBack + values[i]);
      twoBack = oneBack; oneBack = current;
    }
    long long best = oneBack;
    twoBack = oneBack = 0;
    for (int i = 1; i < static_cast<int>(values.size()); ++i) {
      long long current = std::max(oneBack, twoBack + values[i]);
      twoBack = oneBack; oneBack = current;
    }
    return std::max(best, oneBack);
  }
};
