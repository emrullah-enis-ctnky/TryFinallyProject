import java.util.*;
class Solution {
  public int minimumCableMoves(int n, int[][] edges) {
    if (edges.length < n - 1) return -1;
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) graph.add(new ArrayList<>());
    for (int[] edge : edges) { graph.get(edge[0]).add(edge[1]); graph.get(edge[1]).add(edge[0]); }
    boolean[] seen = new boolean[n];
    int components = 0;
    for (int start = 0; start < n; start++) if (!seen[start]) {
      components++;
      Deque<Integer> stack = new ArrayDeque<>();
      stack.push(start);
      seen[start] = true;
      while (!stack.isEmpty()) {
        int node = stack.pop();
        for (int next : graph.get(node)) if (!seen[next]) { seen[next] = true; stack.push(next); }
      }
    }
    return components - 1;
  }
}
