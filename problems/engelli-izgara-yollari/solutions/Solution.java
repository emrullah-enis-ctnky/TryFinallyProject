class Solution {
  public long countGridPaths(int[][] grid) {
    if (grid.length == 0 || grid[0].length == 0 || grid[0][0] == 1) return 0L;
    long[] ways = new long[grid[0].length];
    ways[0] = 1L;
    for (int[] row : grid) {
      for (int col = 0; col < row.length; col++) {
        if (row[col] == 1) ways[col] = 0L;
        else if (col > 0) ways[col] += ways[col - 1];
      }
    }
    return ways[ways.length - 1];
  }
}
