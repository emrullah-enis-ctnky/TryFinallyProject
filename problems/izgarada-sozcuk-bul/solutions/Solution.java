class Solution {
  public boolean existsInGrid(String[] grid, String word) {
    int rows = grid.length, cols = grid[0].length();
    boolean[][] used = new boolean[rows][cols];
    int[] rowStack = new int[word.length()], colStack = new int[word.length()], nextDirection = new int[word.length()];
    for (int startRow = 0; startRow < rows; startRow++) for (int startCol = 0; startCol < cols; startCol++) {
      if (grid[startRow].charAt(startCol) != word.charAt(0)) continue;
      int depth = 0;
      rowStack[0] = startRow; colStack[0] = startCol; nextDirection[0] = 0;
      used[startRow][startCol] = true;
      while (depth >= 0) {
        if (depth == word.length() - 1) return true;
        if (nextDirection[depth] == 4) {
          used[rowStack[depth]][colStack[depth]] = false;
          depth--;
          continue;
        }
        int direction = nextDirection[depth]++;
        int nr = rowStack[depth] + (direction == 0 ? 1 : direction == 1 ? -1 : 0);
        int nc = colStack[depth] + (direction == 2 ? 1 : direction == 3 ? -1 : 0);
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !used[nr][nc]
            && grid[nr].charAt(nc) == word.charAt(depth + 1)) {
          depth++;
          rowStack[depth] = nr; colStack[depth] = nc; nextDirection[depth] = 0;
          used[nr][nc] = true;
        }
      }
    }
    return false;
  }
}
