import java.util.ArrayDeque;
class Solution {
  public boolean isValidBst(int[] nodes) {
    if (nodes.length == 0 || nodes[0] == -1) return true;
    ArrayDeque<long[]> stack = new ArrayDeque<>();
    stack.push(new long[]{0, Long.MIN_VALUE, Long.MAX_VALUE});
    while (!stack.isEmpty()) {
      long[] state = stack.pop();
      int index = (int) state[0], value = nodes[index];
      if (value == -1) continue;
      if (value <= state[1] || value >= state[2]) return false;
      int left = 2 * index + 1, right = left + 1;
      if (right < nodes.length && nodes[right] != -1) stack.push(new long[]{right, value, state[2]});
      if (left < nodes.length && nodes[left] != -1) stack.push(new long[]{left, state[1], value});
    }
    return true;
  }
}
