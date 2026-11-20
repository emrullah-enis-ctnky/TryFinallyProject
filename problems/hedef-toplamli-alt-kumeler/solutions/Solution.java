import java.util.ArrayDeque;
class Solution {
  public int countTargetSubsets(int[] nums, int target) {
    ArrayDeque<int[]> states = new ArrayDeque<>();
    states.push(new int[]{0, 0});
    int count = 0;
    while (!states.isEmpty()) {
      int[] state = states.pop();
      int index = state[0], total = state[1];
      if (index == nums.length) { if (total == target) count++; continue; }
      states.push(new int[]{index + 1, total});
      if (total + nums[index] <= target) states.push(new int[]{index + 1, total + nums[index]});
    }
    return count;
  }
}
