import java.util.*;
class Solution {
  public int[] mergeSortedStreams(int[][] streams) {
    PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
    int total = 0;
    for (int i = 0; i < streams.length; i++) {
      total += streams[i].length;
      if (streams[i].length > 0) queue.add(new int[]{streams[i][0], i, 0});
    }
    int[] result = new int[total];
    int out = 0;
    while (!queue.isEmpty()) {
      int[] item = queue.remove();
      result[out++] = item[0];
      int next = item[2] + 1;
      if (next < streams[item[1]].length) queue.add(new int[]{streams[item[1]][next], item[1], next});
    }
    return result;
  }
}
