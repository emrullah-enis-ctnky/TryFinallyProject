#include <vector>
class Solution {
public:
  int countCoinWays(std::vector<int>& coins, int amount) {
    std::vector<int> ways(amount + 1, 0);
    ways[0] = 1;
    for (int coin : coins)
      for (int total = coin; total <= amount; ++total)
        ways[total] += ways[total - coin];
    return ways[amount];
  }
};
