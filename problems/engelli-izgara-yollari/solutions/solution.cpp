#include <vector>
class Solution {
public:
  long long countGridPaths(std::vector<std::vector<int>>& grid) {
    if (grid.empty() || grid[0].empty() || grid[0][0] == 1) return 0;
    std::vector<long long> ways(grid[0].size(), 0);
    ways[0] = 1;
    for (const auto& row : grid) {
      for (int col = 0; col < static_cast<int>(row.size()); ++col) {
        if (row[col] == 1) ways[col] = 0;
        else if (col > 0) ways[col] += ways[col - 1];
      }
    }
    return ways.back();
  }
};
