class Solution {
  public long maximumCircularLightValue(int[] values) {
    if (values.length == 1) return values[0];
    long twoBack = 0, oneBack = 0;
    for (int i = 0; i < values.length - 1; i++) {
      long current = Math.max(oneBack, twoBack + values[i]);
      twoBack = oneBack; oneBack = current;
    }
    long best = oneBack;
    twoBack = 0; oneBack = 0;
    for (int i = 1; i < values.length; i++) {
      long current = Math.max(oneBack, twoBack + values[i]);
      twoBack = oneBack; oneBack = current;
    }
    return Math.max(best, oneBack);
  }
}
