import java.util.ArrayDeque;
class Solution {
  public int countLandRegions(int[][] grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    int rows = grid.length, cols = grid[0].length, regions = 0;
    boolean[][] seen = new boolean[rows][cols];
    int[] dr = {1, -1, 0, 0}, dc = {0, 0, 1, -1};
    ArrayDeque<int[]> queue = new ArrayDeque<>();
    for (int r = 0; r < rows; r++) for (int c = 0; c < cols; c++) {
      if (grid[r][c] != 1 || seen[r][c]) continue;
      regions++; seen[r][c] = true; queue.add(new int[]{r, c});
      while (!queue.isEmpty()) {
        int[] cell = queue.remove();
        for (int d = 0; d < 4; d++) {
          int nr = cell[0] + dr[d], nc = cell[1] + dc[d];
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 && !seen[nr][nc]) {
            seen[nr][nc] = true; queue.add(new int[]{nr, nc});
          }
        }
      }
    }
    return regions;
  }
}
