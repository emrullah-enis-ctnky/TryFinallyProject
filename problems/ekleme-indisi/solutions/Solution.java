class Solution {
  public int insertionIndex(int[] nums, int target) {
    int left = 0, right = nums.length;
    while (left < right) {
      int middle = left + (right - left) / 2;
      if (nums[middle] < target) left = middle + 1; else right = middle;
    }
    return left;
  }
}
