#include <algorithm>
#include <vector>
class Solution {
public:
  int maximumSingleTradeProfit(std::vector<int>& prices) {
    int lowest = prices[0], best = 0;
    for (int price : prices) { best = std::max(best, price - lowest); lowest = std::min(lowest, price); }
    return best;
  }
};
