import java.util.*;
class Solution {
  public int[][] levelValues(int[] nodes) {
    List<int[]> result = new ArrayList<>();
    if (nodes.length == 0 || nodes[0] == -1) return new int[0][0];
    Queue<Integer> queue = new ArrayDeque<>();
    queue.add(0);
    while (!queue.isEmpty()) {
      int count = queue.size();
      int[] level = new int[count];
      for (int i = 0; i < count; i++) {
        int index = queue.remove();
        level[i] = nodes[index];
        int left = 2 * index + 1, right = left + 1;
        if (left < nodes.length && nodes[left] != -1) queue.add(left);
        if (right < nodes.length && nodes[right] != -1) queue.add(right);
      }
      result.add(level);
    }
    return result.toArray(new int[result.size()][]);
  }
}
