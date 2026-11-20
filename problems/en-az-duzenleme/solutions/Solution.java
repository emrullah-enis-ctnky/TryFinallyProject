class Solution {
  public int minimumEdits(String source, String target) {
    int[] previous = new int[target.length() + 1], current = new int[target.length() + 1];
    for (int j = 0; j <= target.length(); j++) previous[j] = j;
    for (int i = 1; i <= source.length(); i++) {
      current[0] = i;
      for (int j = 1; j <= target.length(); j++) {
        current[j] = source.charAt(i - 1) == target.charAt(j - 1) ? previous[j - 1]
            : 1 + Math.min(previous[j - 1], Math.min(previous[j], current[j - 1]));
      }
      int[] temp = previous; previous = current; current = temp;
    }
    return previous[target.length()];
  }
}
