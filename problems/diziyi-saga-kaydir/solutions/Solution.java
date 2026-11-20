class Solution {
  public int[] rotateRight(int[] nums, int k) {
    int n = nums.length, shift = k % n;
    int[] result = new int[n];
    for (int i = 0; i < n; i++) result[(i + shift) % n] = nums[i];
    return result;
  }
}
