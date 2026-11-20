import java.util.*;
class Solution {
  public long minimumNetworkCost(int n, int[][] edges) {
    int[][] sorted = edges.clone();
    Arrays.sort(sorted, (a, b) -> Integer.compare(a[2], b[2]));
    int[] parent = new int[n], rank = new int[n];
    for (int i = 0; i < n; i++) parent[i] = i;
    long total = 0;
    int used = 0;
    for (int[] edge : sorted) {
      int a = edge[0];
      while (parent[a] != a) { parent[a] = parent[parent[a]]; a = parent[a]; }
      int b = edge[1];
      while (parent[b] != b) { parent[b] = parent[parent[b]]; b = parent[b]; }
      if (a == b) continue;
      if (rank[a] < rank[b]) { int temp = a; a = b; b = temp; }
      parent[b] = a;
      if (rank[a] == rank[b]) rank[a]++;
      total += edge[2];
      if (++used == n - 1) return total;
    }
    return used == n - 1 ? total : -1;
  }
}
