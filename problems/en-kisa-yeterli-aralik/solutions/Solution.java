class Solution {
  public int shortestEnoughRange(int[] sales, int target) {
    int left = 0, best = Integer.MAX_VALUE;
    long sum = 0;
    for (int right = 0; right < sales.length; right++) {
      sum += sales[right];
      while (sum >= target) {
        best = Math.min(best, right - left + 1);
        sum -= sales[left++];
      }
    }
    return best == Integer.MAX_VALUE ? 0 : best;
  }
}
