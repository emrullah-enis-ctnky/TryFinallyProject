#include <functional>
#include <queue>
#include <utility>
#include <vector>
class Solution {
public:
  std::vector<int> shortestStationDistances(int n, std::vector<std::vector<int>>& edges, int source) {
    std::vector<std::vector<std::pair<int, int>>> graph(n);
    for (const auto& edge : edges) { graph[edge[0]].push_back({edge[1], edge[2]}); graph[edge[1]].push_back({edge[0], edge[2]}); }
    const int inf = 1000000000;
    std::vector<int> distance(n, inf);
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> queue;
    distance[source] = 0; queue.push({0, source});
    while (!queue.empty()) {
      auto [cost, node] = queue.top(); queue.pop();
      if (cost != distance[node]) continue;
      for (const auto& edge : graph[node]) if (cost + edge.second < distance[edge.first]) {
        distance[edge.first] = cost + edge.second;
        queue.push({distance[edge.first], edge.first});
      }
    }
    for (int& value : distance) if (value == inf) value = -1;
    return distance;
  }
};
