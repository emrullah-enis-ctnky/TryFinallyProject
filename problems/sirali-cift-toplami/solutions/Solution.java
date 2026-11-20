class Solution {
  public boolean hasPairWithSum(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
      long sum = (long) nums[left] + nums[right];
      if (sum == target) return true;
      if (sum < target) left++; else right--;
    }
    return false;
  }
}
