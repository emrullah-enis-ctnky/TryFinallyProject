class Solution {
  public int maxNonAdjacentSum(int[] values) {
    int twoBack = 0, oneBack = 0;
    for (int value : values) {
      int current = Math.max(oneBack, twoBack + value);
      twoBack = oneBack;
      oneBack = current;
    }
    return oneBack;
  }
}
