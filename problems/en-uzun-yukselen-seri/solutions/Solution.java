class Solution {
  public int longestRisingRun(int[] nums) {
    int best = 1, run = 1;
    for (int i = 1; i < nums.length; i++) {
      run = nums[i] > nums[i - 1] ? run + 1 : 1;
      if (run > best) best = run;
    }
    return best;
  }
}
