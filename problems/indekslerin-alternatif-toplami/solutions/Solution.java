class Solution {
  public int alternatingIndexSum(int[] nums) {
    int result = 0;
    for (int i = 0; i < nums.length; i++) result += (i % 2 == 0 ? nums[i] : -nums[i]);
    return result;
  }
}
