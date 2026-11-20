import java.util.ArrayDeque;
class Solution {
  public long sumWindowMaximums(int[] nums, int k) {
    ArrayDeque<Integer> indices = new ArrayDeque<>();
    long total = 0;
    for (int i = 0; i < nums.length; i++) {
      while (!indices.isEmpty() && indices.peekFirst() <= i - k) indices.removeFirst();
      while (!indices.isEmpty() && nums[indices.peekLast()] <= nums[i]) indices.removeLast();
      indices.addLast(i);
      if (i >= k - 1) total += nums[indices.peekFirst()];
    }
    return total;
  }
}
