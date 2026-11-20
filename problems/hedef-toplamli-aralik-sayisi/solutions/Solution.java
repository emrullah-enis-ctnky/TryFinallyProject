import java.util.*;
class Solution {
  public long countTargetRanges(int[] values, int target) {
    Map<Long, Long> seen = new HashMap<>();
    seen.put(0L, 1L);
    long prefix = 0, result = 0;
    for (int value : values) {
      prefix += value;
      result += seen.getOrDefault(prefix - target, 0L);
      seen.put(prefix, seen.getOrDefault(prefix, 0L) + 1);
    }
    return result;
  }
}
