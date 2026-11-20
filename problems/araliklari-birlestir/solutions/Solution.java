import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
class Solution {
  public int[][] mergeIntervals(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> merged = new ArrayList<>();
    for (int[] interval : intervals) {
      if (merged.isEmpty() || interval[0] > merged.get(merged.size() - 1)[1]) merged.add(new int[]{interval[0], interval[1]});
      else merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);
    }
    return merged.toArray(new int[merged.size()][]);
  }
}
