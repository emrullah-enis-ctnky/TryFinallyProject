import java.util.*;
class Solution {
  public int longestConsecutiveRun(int[] codes) {
    Set<Integer> values = new HashSet<>();
    for (int value : codes) values.add(value);
    int best = 0;
    for (int value : values) if (!values.contains(value - 1)) {
      int length = 1;
      while (values.contains(value + length)) length++;
      best = Math.max(best, length);
    }
    return best;
  }
}
