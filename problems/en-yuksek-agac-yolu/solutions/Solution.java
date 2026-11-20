import java.util.*;
class Solution {
  public int maximumTreePathSum(int[] nodes) {
    int empty = Integer.MIN_VALUE;
    if (nodes.length == 0 || nodes[0] == empty) return 0;
    int[] order = new int[nodes.length], stack = new int[nodes.length], gain = new int[nodes.length];
    int size = 1, count = 0; stack[0] = 0;
    while (size > 0) {
      int index = stack[--size]; order[count++] = index;
      int left = 2 * index + 1, right = left + 1;
      if (left < nodes.length && nodes[left] != empty) stack[size++] = left;
      if (right < nodes.length && nodes[right] != empty) stack[size++] = right;
    }
    int best = -1000000000;
    for (int p = count - 1; p >= 0; p--) {
      int index = order[p], left = 2 * index + 1, right = left + 1;
      int leftGain = left < nodes.length && nodes[left] != empty ? Math.max(0, gain[left]) : 0;
      int rightGain = right < nodes.length && nodes[right] != empty ? Math.max(0, gain[right]) : 0;
      best = Math.max(best, nodes[index] + leftGain + rightGain);
      gain[index] = nodes[index] + Math.max(leftGain, rightGain);
    }
    return best;
  }
}
