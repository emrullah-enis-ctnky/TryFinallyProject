class Solution {
  public int rangeSum(int[] nums, int left, int right) {
    int[] prefix = new int[nums.length + 1];
    for (int i = 0; i < nums.length; i++) prefix[i + 1] = prefix[i] + nums[i];
    return prefix[right + 1] - prefix[left];
  }
}
