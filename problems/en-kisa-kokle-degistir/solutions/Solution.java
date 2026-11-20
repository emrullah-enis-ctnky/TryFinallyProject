import java.util.*;
class Solution {
  public String replaceWithShortestRoots(String[] roots, String sentence) {
    List<int[]> children = new ArrayList<>();
    List<Boolean> terminal = new ArrayList<>();
    children.add(new int[26]); Arrays.fill(children.get(0), -1); terminal.add(false);
    for (String root : roots) {
      int node = 0;
      for (int i = 0; i < root.length(); i++) {
        int letter = root.charAt(i) - 'a';
        if (children.get(node)[letter] == -1) {
          children.get(node)[letter] = children.size();
          int[] row = new int[26]; Arrays.fill(row, -1); children.add(row); terminal.add(false);
        }
        node = children.get(node)[letter];
      }
      terminal.set(node, true);
    }
    if (sentence.isEmpty()) return "";
    StringBuilder result = new StringBuilder();
    for (String word : sentence.split(" ")) {
      int node = 0, length = 0, matched = 0;
      for (int i = 0; i < word.length(); i++) {
        int next = children.get(node)[word.charAt(i) - 'a'];
        if (next == -1) break;
        node = next; length++;
        if (terminal.get(node)) { matched = length; break; }
      }
      if (result.length() > 0) result.append(' ');
      result.append(matched == 0 ? word : word.substring(0, matched));
    }
    return result.toString();
  }
}
