import java.util.*;
class Solution {
  public int shortestRouteLength(int n, int[][] edges, int start, int destination) {
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) graph.add(new ArrayList<>());
    for (int[] edge : edges) graph.get(edge[0]).add(edge[1]);
    int[] distance = new int[n];
    Arrays.fill(distance, -1);
    Queue<Integer> queue = new ArrayDeque<>();
    distance[start] = 0;
    queue.add(start);
    while (!queue.isEmpty()) {
      int node = queue.remove();
      if (node == destination) return distance[node];
      for (int next : graph.get(node)) if (distance[next] == -1) {
        distance[next] = distance[node] + 1;
        queue.add(next);
      }
    }
    return -1;
  }
}
