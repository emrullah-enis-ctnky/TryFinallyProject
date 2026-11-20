#include <cstdlib>
#include <vector>
class Solution {
public:
  std::vector<int> closestPair(std::vector<int>& prices, int target) {
    int left = 0, right = static_cast<int>(prices.size()) - 1;
    long long bestDiff = 4000000001LL;
    std::vector<int> best;
    while (left < right) {
      long long sum = static_cast<long long>(prices[left]) + prices[right];
      long long diff = std::llabs(sum - target);
      if (diff < bestDiff || (diff == bestDiff && (best.empty() || prices[left] < best[0] || (prices[left] == best[0] && prices[right] < best[1])))) {
        bestDiff = diff;
        best = {prices[left], prices[right]};
      }
      if (sum < target) ++left;
      else --right;
    }
    return best;
  }
};
