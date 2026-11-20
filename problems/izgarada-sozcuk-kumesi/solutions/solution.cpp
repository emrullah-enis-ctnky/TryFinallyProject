#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  std::vector<std::string> findGridWords(std::vector<std::string>& grid, std::vector<std::string>& words) {
    std::vector<std::vector<int>> children(1, std::vector<int>(26, -1));
    std::vector<int> terminal(1, -1);
    for (int id = 0; id < static_cast<int>(words.size()); ++id) {
      int node = 0;
      for (char ch : words[id]) {
        int letter = ch - 'A';
        if (children[node][letter] == -1) {
          children[node][letter] = static_cast<int>(children.size());
          children.emplace_back(26, -1); terminal.push_back(-1);
        }
        node = children[node][letter];
      }
      terminal[node] = id;
    }
    int rows = static_cast<int>(grid.size()), cols = static_cast<int>(grid[0].size());
    std::vector<std::vector<char>> used(rows, std::vector<char>(cols, false));
    std::vector<char> found(words.size(), false);
    auto search = [&](auto&& self, int r, int c, int node) -> void {
      if (r < 0 || r >= rows || c < 0 || c >= cols || used[r][c]) return;
      int next = children[node][grid[r][c] - 'A'];
      if (next == -1) return;
      if (terminal[next] != -1) found[terminal[next]] = true;
      used[r][c] = true;
      self(self, r + 1, c, next); self(self, r - 1, c, next);
      self(self, r, c + 1, next); self(self, r, c - 1, next);
      used[r][c] = false;
    };
    for (int r = 0; r < rows; ++r) for (int c = 0; c < cols; ++c) search(search, r, c, 0);
    std::vector<std::string> result;
    for (int i = 0; i < static_cast<int>(words.size()); ++i) if (found[i]) result.push_back(words[i]);
    std::sort(result.begin(), result.end());
    return result;
  }
};
