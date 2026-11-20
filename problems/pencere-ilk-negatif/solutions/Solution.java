import java.util.*;
class Solution {
  public int[] firstNegativePerWindow(int[] values, int k) {
    Deque<Integer> negatives = new ArrayDeque<>();
    int[] result = new int[values.length - k + 1];
    for (int i = 0; i < values.length; i++) {
      if (values[i] < 0) negatives.addLast(i);
      while (!negatives.isEmpty() && negatives.peekFirst() <= i - k) negatives.removeFirst();
      if (i >= k - 1) result[i - k + 1] = negatives.isEmpty() ? 0 : values[negatives.peekFirst()];
    }
    return result;
  }
}
