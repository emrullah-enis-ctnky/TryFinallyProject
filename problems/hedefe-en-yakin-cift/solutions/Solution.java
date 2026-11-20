class Solution {
  public int[] closestPair(int[] prices, int target) {
    int left = 0, right = prices.length - 1;
    long bestDiff = Long.MAX_VALUE;
    int bestLeft = 0, bestRight = 0;
    while (left < right) {
      long sum = (long) prices[left] + prices[right];
      long diff = Math.abs(sum - target);
      if (diff < bestDiff || (diff == bestDiff && (prices[left] < bestLeft || (prices[left] == bestLeft && prices[right] < bestRight)))) {
        bestDiff = diff;
        bestLeft = prices[left];
        bestRight = prices[right];
      }
      if (sum < target) left++;
      else right--;
    }
    return new int[]{bestLeft, bestRight};
  }
}
