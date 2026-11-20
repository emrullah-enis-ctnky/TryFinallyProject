class Solution {
  public int searchFirst(int[] nums, int target) {
    int left = 0, right = nums.length;
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] < target) left = mid + 1; else right = mid;
    }
    return left < nums.length && nums[left] == target ? left : -1;
  }
}
