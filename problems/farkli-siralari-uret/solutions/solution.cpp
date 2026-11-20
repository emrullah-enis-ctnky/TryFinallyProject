#include <algorithm>
#include <vector>
class Solution {
public:
  std::vector<std::vector<int>> allTaskOrders(std::vector<int>& tasks) {
    std::vector<int> values = tasks, current;
    std::sort(values.begin(), values.end());
    std::vector<char> used(values.size(), false);
    std::vector<std::vector<int>> result;
    auto generate = [&](auto&& self) -> void {
      if (current.size() == values.size()) { result.push_back(current); return; }
      for (int i = 0; i < static_cast<int>(values.size()); ++i) if (!used[i]) {
        used[i] = true; current.push_back(values[i]);
        self(self);
        current.pop_back(); used[i] = false;
      }
    };
    generate(generate);
    return result;
  }
};
