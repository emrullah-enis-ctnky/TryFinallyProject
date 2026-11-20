#include <algorithm>
#include <vector>
class Solution {
public:
  long long minimumNetworkCost(int n, std::vector<std::vector<int>>& edges) {
    auto sorted = edges;
    std::sort(sorted.begin(), sorted.end(), [](const auto& a, const auto& b) { return a[2] < b[2]; });
    std::vector<int> parent(n), rank(n, 0);
    for (int i = 0; i < n; ++i) parent[i] = i;
    auto findRoot = [&](int node) {
      int root = node;
      while (parent[root] != root) root = parent[root];
      while (parent[node] != node) { int next = parent[node]; parent[node] = root; node = next; }
      return root;
    };
    long long total = 0;
    int used = 0;
    for (const auto& edge : sorted) {
      int a = findRoot(edge[0]), b = findRoot(edge[1]);
      if (a == b) continue;
      if (rank[a] < rank[b]) std::swap(a, b);
      parent[b] = a;
      if (rank[a] == rank[b]) ++rank[a];
      total += edge[2];
      if (++used == n - 1) return total;
    }
    return used == n - 1 ? total : -1;
  }
};
