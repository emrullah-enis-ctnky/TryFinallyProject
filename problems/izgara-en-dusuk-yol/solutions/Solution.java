class Solution {
  public int minimumPathSum(int[][] grid) {
    int cols = grid[0].length;
    int[] costs = new int[cols + 1];
    java.util.Arrays.fill(costs, Integer.MAX_VALUE);
    costs[1] = 0;
    for (int[] row : grid) {
      for (int col = 0; col < cols; col++) {
        costs[col + 1] = Math.min(costs[col], costs[col + 1]) + row[col];
      }
    }
    return costs[cols];
  }
}
