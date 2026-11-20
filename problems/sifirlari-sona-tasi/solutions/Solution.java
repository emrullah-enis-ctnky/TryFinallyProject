class Solution {
  public int[] moveZerosToEnd(int[] nums) {
    int[] result = new int[nums.length];
    int next = 0;
    for (int value : nums) if (value != 0) result[next++] = value;
    return result;
  }
}
