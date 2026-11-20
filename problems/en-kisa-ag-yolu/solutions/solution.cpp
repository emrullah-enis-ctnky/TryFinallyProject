#include <queue>
#include <vector>
class Solution {
public:
  int shortestRouteLength(int n, std::vector<std::vector<int>>& edges, int start, int destination) {
    std::vector<std::vector<int>> graph(n);
    for (const auto& edge : edges) graph[edge[0]].push_back(edge[1]);
    std::vector<int> distance(n, -1);
    std::queue<int> queue;
    distance[start] = 0;
    queue.push(start);
    while (!queue.empty()) {
      int node = queue.front(); queue.pop();
      if (node == destination) return distance[node];
      for (int next : graph[node]) if (distance[next] == -1) {
        distance[next] = distance[node] + 1;
        queue.push(next);
      }
    }
    return -1;
  }
};
