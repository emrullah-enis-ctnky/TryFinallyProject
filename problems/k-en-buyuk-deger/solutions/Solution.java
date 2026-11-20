import java.util.PriorityQueue;
class Solution {
  public int kthLargest(int[] nums, int k) {
    PriorityQueue<Integer> smallestOfLargest = new PriorityQueue<>();
    for (int value : nums) {
      smallestOfLargest.add(value);
      if (smallestOfLargest.size() > k) smallestOfLargest.remove();
    }
    return smallestOfLargest.peek();
  }
}
