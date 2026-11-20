#include <algorithm>
#include <climits>
#include <vector>
class Solution {
public:
  int shortestEnoughRange(std::vector<int>& sales, int target) {
    int left = 0, best = INT_MAX;
    long long sum = 0;
    for (int right = 0; right < static_cast<int>(sales.size()); ++right) {
      sum += sales[right];
      while (sum >= target) {
        best = std::min(best, right - left + 1);
        sum -= sales[left++];
      }
    }
    return best == INT_MAX ? 0 : best;
  }
};
