import java.util.*;
class Solution {
  public int[][] allTaskOrders(int[] tasks) {
    int[] values = tasks.clone();
    Arrays.sort(values);
    Deque<int[]> pending = new ArrayDeque<>();
    pending.push(new int[0]);
    List<int[]> result = new ArrayList<>();
    while (!pending.isEmpty()) {
      int[] partial = pending.pop();
      if (partial.length == values.length) { result.add(partial); continue; }
      for (int i = values.length - 1; i >= 0; i--) {
        boolean used = false;
        for (int value : partial) if (value == values[i]) { used = true; break; }
        if (!used) {
          int[] next = Arrays.copyOf(partial, partial.length + 1);
          next[partial.length] = values[i];
          pending.push(next);
        }
      }
    }
    return result.toArray(new int[result.size()][]);
  }
}
