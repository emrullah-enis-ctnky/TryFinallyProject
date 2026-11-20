#include <algorithm>
#include <vector>
class Solution {
public:
  int minimumPathSum(std::vector<std::vector<int>>& grid) {
    int cols = static_cast<int>(grid[0].size());
    std::vector<int> costs(cols + 1, 1000000000);
    costs[1] = 0;
    for (const auto& row : grid)
      for (int col = 0; col < cols; ++col)
        costs[col + 1] = std::min(costs[col], costs[col + 1]) + row[col];
    return costs[cols];
  }
};
