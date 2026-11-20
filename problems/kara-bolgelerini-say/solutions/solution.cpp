#include <queue>
#include <utility>
#include <vector>
class Solution {
public:
  int countLandRegions(std::vector<std::vector<int>>& grid) {
    if (grid.empty() || grid[0].empty()) return 0;
    int rows = static_cast<int>(grid.size()), cols = static_cast<int>(grid[0].size()), regions = 0;
    std::vector<std::vector<bool>> seen(rows, std::vector<bool>(cols, false));
    int dr[4] = {1, -1, 0, 0}, dc[4] = {0, 0, 1, -1};
    std::queue<std::pair<int, int>> queue;
    for (int r = 0; r < rows; ++r) for (int c = 0; c < cols; ++c) {
      if (grid[r][c] != 1 || seen[r][c]) continue;
      ++regions; seen[r][c] = true; queue.push({r, c});
      while (!queue.empty()) {
        auto cell = queue.front(); queue.pop();
        for (int d = 0; d < 4; ++d) {
          int nr = cell.first + dr[d], nc = cell.second + dc[d];
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 && !seen[nr][nc]) {
            seen[nr][nc] = true; queue.push({nr, nc});
          }
        }
      }
    }
    return regions;
  }
};
