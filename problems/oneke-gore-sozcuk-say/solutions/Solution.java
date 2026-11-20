import java.util.Arrays;
class Solution {
  public int[] prefixWordCounts(String[] words, String[] prefixes) {
    int capacity = 1;
    for (String word : words) capacity += word.length();
    int[][] children = new int[capacity][26];
    for (int[] row : children) Arrays.fill(row, -1);
    int[] counts = new int[capacity];
    int nodes = 1;
    for (String word : words) {
      int node = 0;
      counts[node]++;
      for (int i = 0; i < word.length(); i++) {
        int letter = word.charAt(i) - 'a';
        if (children[node][letter] == -1) children[node][letter] = nodes++;
        node = children[node][letter];
        counts[node]++;
      }
    }
    int[] result = new int[prefixes.length];
    for (int q = 0; q < prefixes.length; q++) {
      int node = 0;
      for (int i = 0; i < prefixes[q].length() && node != -1; i++) node = children[node][prefixes[q].charAt(i) - 'a'];
      result[q] = node == -1 ? 0 : counts[node];
    }
    return result;
  }
}
