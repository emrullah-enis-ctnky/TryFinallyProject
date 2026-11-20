class Solution {
  public int largestFilledSquare(int[][] grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    int rows = grid.length, cols = grid[0].length, best = 0;
    int[] dp = new int[cols + 1];
    for (int r = 1; r <= rows; r++) {
      int diagonal = 0;
      for (int c = 1; c <= cols; c++) {
        int above = dp[c];
        dp[c] = grid[r - 1][c - 1] == 0 ? 0 : 1 + Math.min(diagonal, Math.min(dp[c - 1], dp[c]));
        best = Math.max(best, dp[c]);
        diagonal = above;
      }
    }
    return best * best;
  }
}
