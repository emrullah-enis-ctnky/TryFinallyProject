class Solution {
  public int searchRotated(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
      int middle = left + (right - left) / 2;
      if (nums[middle] == target) return middle;
      if (nums[left] <= nums[middle]) {
        if (nums[left] <= target && target < nums[middle]) right = middle - 1; else left = middle + 1;
      } else {
        if (nums[middle] < target && target <= nums[right]) left = middle + 1; else right = middle - 1;
      }
    }
    return -1;
  }
}
