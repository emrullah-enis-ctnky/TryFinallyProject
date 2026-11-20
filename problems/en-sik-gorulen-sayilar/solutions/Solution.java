import java.util.*;
class Solution {
  public int[] topFrequentValues(int[] values, int k) {
    Map<Integer, Integer> count = new HashMap<>();
    for (int value : values) count.put(value, count.getOrDefault(value, 0) + 1);
    List<Integer> ordered = new ArrayList<>(count.keySet());
    ordered.sort((a, b) -> count.get(a).equals(count.get(b)) ? Integer.compare(a, b) : Integer.compare(count.get(b), count.get(a)));
    int[] result = new int[k];
    for (int i = 0; i < k; i++) result[i] = ordered.get(i);
    return result;
  }
}
