#include <algorithm>
#include <vector>
class Solution {
public:
  int largestFilledSquare(std::vector<std::vector<int>>& grid) {
    if (grid.empty() || grid[0].empty()) return 0;
    int rows = static_cast<int>(grid.size()), cols = static_cast<int>(grid[0].size()), best = 0;
    std::vector<int> dp(cols + 1, 0);
    for (int r = 1; r <= rows; ++r) {
      int diagonal = 0;
      for (int c = 1; c <= cols; ++c) {
        int above = dp[c];
        dp[c] = grid[r - 1][c - 1] == 0 ? 0 : 1 + std::min(diagonal, std::min(dp[c - 1], dp[c]));
        best = std::max(best, dp[c]);
        diagonal = above;
      }
    }
    return best * best;
  }
};
