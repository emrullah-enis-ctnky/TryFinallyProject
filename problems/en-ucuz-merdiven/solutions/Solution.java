class Solution {
  public long minimumClimbCost(int[] cost) {
    long twoBack = 0, oneBack = 0;
    for (int i = 2; i <= cost.length; i++) {
      long current = Math.min(oneBack + cost[i - 1], twoBack + cost[i - 2]);
      twoBack = oneBack;
      oneBack = current;
    }
    return oneBack;
  }
}
