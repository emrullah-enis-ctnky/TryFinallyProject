#include <vector>
class Solution {
public:
  int minimumCableMoves(int n, std::vector<std::vector<int>>& edges) {
    if (static_cast<int>(edges.size()) < n - 1) return -1;
    std::vector<std::vector<int>> graph(n);
    for (const auto& edge : edges) { graph[edge[0]].push_back(edge[1]); graph[edge[1]].push_back(edge[0]); }
    std::vector<char> seen(n, false);
    int components = 0;
    for (int start = 0; start < n; ++start) if (!seen[start]) {
      ++components;
      std::vector<int> stack(1, start);
      seen[start] = true;
      while (!stack.empty()) {
        int node = stack.back(); stack.pop_back();
        for (int next : graph[node]) if (!seen[next]) { seen[next] = true; stack.push_back(next); }
      }
    }
    return components - 1;
  }
};
