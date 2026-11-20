class Solution {
  public int secondLargest(int[] nums) {
    int largest = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
    boolean hasLargest = false, hasSecond = false;
    for (int value : nums) {
      if (!hasLargest || value > largest) {
        if (!hasLargest || value != largest) {
          if (hasLargest) { second = largest; hasSecond = true; }
          largest = value; hasLargest = true;
        }
      } else if (value != largest && (!hasSecond || value > second)) {
        second = value; hasSecond = true;
      }
    }
    return second;
  }
}
