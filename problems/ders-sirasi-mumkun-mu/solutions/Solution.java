import java.util.*;
class Solution {
  public boolean canFinishCourses(int n, int[][] prerequisites) {
    List<List<Integer>> next = new ArrayList<>();
    for (int i = 0; i < n; i++) next.add(new ArrayList<>());
    int[] indegree = new int[n];
    for (int[] pair : prerequisites) { next.get(pair[1]).add(pair[0]); indegree[pair[0]]++; }
    Queue<Integer> ready = new ArrayDeque<>();
    for (int i = 0; i < n; i++) if (indegree[i] == 0) ready.add(i);
    int completed = 0;
    while (!ready.isEmpty()) {
      int course = ready.remove(); completed++;
      for (int following : next.get(course)) if (--indegree[following] == 0) ready.add(following);
    }
    return completed == n;
  }
}
