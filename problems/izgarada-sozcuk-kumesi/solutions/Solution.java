import java.util.*;
class Solution {
  public String[] findGridWords(String[] grid, String[] words) {
    List<int[]> children = new ArrayList<>();
    List<Integer> terminal = new ArrayList<>();
    int[] root = new int[26]; Arrays.fill(root, -1); children.add(root); terminal.add(-1);
    for (int id = 0; id < words.length; id++) {
      int node = 0;
      for (int i = 0; i < words[id].length(); i++) {
        int letter = words[id].charAt(i) - 'A';
        if (children.get(node)[letter] == -1) {
          children.get(node)[letter] = children.size();
          int[] row = new int[26]; Arrays.fill(row, -1); children.add(row); terminal.add(-1);
        }
        node = children.get(node)[letter];
      }
      terminal.set(node, id);
    }
    int rows = grid.length, cols = grid[0].length();
    boolean[][] used = new boolean[rows][cols];
    boolean[] found = new boolean[words.length];
    int maxLength = 0;
    for (String word : words) maxLength = Math.max(maxLength, word.length());
    int[] rowStack = new int[maxLength], colStack = new int[maxLength], nodeStack = new int[maxLength], nextDirection = new int[maxLength];
    for (int sr = 0; sr < rows; sr++) for (int sc = 0; sc < cols; sc++) {
      int first = children.get(0)[grid[sr].charAt(sc) - 'A'];
      if (first == -1) continue;
      int depth = 0;
      rowStack[0] = sr; colStack[0] = sc; nodeStack[0] = first; nextDirection[0] = 0;
      used[sr][sc] = true;
      if (terminal.get(first) != -1) found[terminal.get(first)] = true;
      while (depth >= 0) {
        if (nextDirection[depth] == 4) { used[rowStack[depth]][colStack[depth]] = false; depth--; continue; }
        int direction = nextDirection[depth]++;
        int nr = rowStack[depth] + (direction == 0 ? 1 : direction == 1 ? -1 : 0);
        int nc = colStack[depth] + (direction == 2 ? 1 : direction == 3 ? -1 : 0);
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || used[nr][nc]) continue;
        int nextNode = children.get(nodeStack[depth])[grid[nr].charAt(nc) - 'A'];
        if (nextNode == -1) continue;
        depth++;
        rowStack[depth] = nr; colStack[depth] = nc; nodeStack[depth] = nextNode; nextDirection[depth] = 0;
        used[nr][nc] = true;
        if (terminal.get(nextNode) != -1) found[terminal.get(nextNode)] = true;
      }
    }
    List<String> result = new ArrayList<>();
    for (int i = 0; i < words.length; i++) if (found[i]) result.add(words[i]);
    Collections.sort(result);
    return result.toArray(new String[0]);
  }
}
