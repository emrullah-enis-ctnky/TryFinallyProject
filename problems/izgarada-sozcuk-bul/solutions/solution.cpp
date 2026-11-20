#include <string>
#include <vector>
class Solution {
public:
  bool existsInGrid(std::vector<std::string>& grid, std::string word) {
    int rows = static_cast<int>(grid.size()), cols = static_cast<int>(grid[0].size());
    std::vector<std::vector<char>> used(rows, std::vector<char>(cols, false));
    auto search = [&](auto&& self, int r, int c, int index) -> bool {
      if (r < 0 || r >= rows || c < 0 || c >= cols || used[r][c] || grid[r][c] != word[index]) return false;
      if (index + 1 == static_cast<int>(word.size())) return true;
      used[r][c] = true;
      bool found = self(self, r + 1, c, index + 1) || self(self, r - 1, c, index + 1)
          || self(self, r, c + 1, index + 1) || self(self, r, c - 1, index + 1);
      used[r][c] = false;
      return found;
    };
    for (int r = 0; r < rows; ++r) for (int c = 0; c < cols; ++c) if (search(search, r, c, 0)) return true;
    return false;
  }
};
