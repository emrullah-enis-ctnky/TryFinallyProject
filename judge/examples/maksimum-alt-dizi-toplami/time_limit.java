class Solution {
  public int maxSubArray(int[] nums) {
    int best = nums[0];
    for (int i = 0; i < nums.length; i++) {
      int sum = 0;
      for (int j = i; j < nums.length; j++) {
        sum += nums[j];
        best = Math.max(best, sum);
      }
    }
    return best;
  }
}
