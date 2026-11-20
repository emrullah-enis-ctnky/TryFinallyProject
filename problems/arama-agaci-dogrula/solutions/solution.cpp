#include <climits>
#include <vector>
class Solution {
public:
  bool isValidBst(std::vector<int>& nodes) {
    if (nodes.empty() || nodes[0] == -1) return true;
    struct State { int index; long long low; long long high; };
    std::vector<State> stack{{0, LLONG_MIN, LLONG_MAX}};
    while (!stack.empty()) {
      State state = stack.back(); stack.pop_back();
      int value = nodes[state.index];
      if (value == -1) continue;
      if (value <= state.low || value >= state.high) return false;
      int left = 2 * state.index + 1, right = left + 1;
      if (right < static_cast<int>(nodes.size()) && nodes[right] != -1) stack.push_back({right, value, state.high});
      if (left < static_cast<int>(nodes.size()) && nodes[left] != -1) stack.push_back({left, state.low, value});
    }
    return true;
  }
};
