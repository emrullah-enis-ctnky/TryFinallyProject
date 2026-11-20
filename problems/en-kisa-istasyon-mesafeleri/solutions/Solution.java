import java.util.*;
class Solution {
  public int[] shortestStationDistances(int n, int[][] edges, int source) {
    List<List<int[]>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) graph.add(new ArrayList<>());
    for (int[] edge : edges) { graph.get(edge[0]).add(new int[]{edge[1], edge[2]}); graph.get(edge[1]).add(new int[]{edge[0], edge[2]}); }
    int inf = 1000000000;
    int[] distance = new int[n];
    Arrays.fill(distance, inf);
    PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
    distance[source] = 0; queue.add(new int[]{0, source});
    while (!queue.isEmpty()) {
      int[] current = queue.remove();
      int cost = current[0], node = current[1];
      if (cost != distance[node]) continue;
      for (int[] edge : graph.get(node)) if (cost + edge[1] < distance[edge[0]]) {
        distance[edge[0]] = cost + edge[1];
        queue.add(new int[]{distance[edge[0]], edge[0]});
      }
    }
    for (int i = 0; i < n; i++) if (distance[i] == inf) distance[i] = -1;
    return distance;
  }
}
