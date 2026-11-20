import java.util.*;
class Solution {
  public int[] findPairIndices(int[] nums, int target) {
    Map<Integer, Integer> firstIndex = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];
      if (firstIndex.containsKey(complement)) return new int[]{firstIndex.get(complement), i};
      firstIndex.putIfAbsent(nums[i], i);
    }
    return new int[0];
  }
}
