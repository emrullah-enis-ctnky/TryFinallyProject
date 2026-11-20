import java.util.ArrayDeque;
class Solution {
  public int treeHeight(int[] levelOrder) {
    if (levelOrder.length == 0 || levelOrder[0] == -1) return 0;
    ArrayDeque<int[]> stack = new ArrayDeque<>();
    stack.push(new int[]{0, 1});
    int height = 0;
    while (!stack.isEmpty()) {
      int[] node = stack.pop();
      int index = node[0], depth = node[1];
      height = Math.max(height, depth);
      int left = 2 * index + 1, right = left + 1;
      if (right < levelOrder.length && levelOrder[right] != -1) stack.push(new int[]{right, depth + 1});
      if (left < levelOrder.length && levelOrder[left] != -1) stack.push(new int[]{left, depth + 1});
    }
    return height;
  }
}
