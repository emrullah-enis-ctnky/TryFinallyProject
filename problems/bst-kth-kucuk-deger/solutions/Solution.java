import java.util.*;
class Solution {
  public int kthSmallestBst(int[] nodes, int k) {
    Deque<Integer> stack = new ArrayDeque<>();
    int index = 0;
    while (index < nodes.length || !stack.isEmpty()) {
      while (index < nodes.length && nodes[index] != -1) { stack.push(index); index = 2 * index + 1; }
      index = stack.pop();
      if (--k == 0) return nodes[index];
      index = 2 * index + 2;
    }
    return -1;
  }
}
