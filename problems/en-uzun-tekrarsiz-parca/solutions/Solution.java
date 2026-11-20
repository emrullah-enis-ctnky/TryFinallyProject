class Solution {
  public int longestUniqueLength(String text) {
    int[] lastSeen = new int[26];
    for (int i = 0; i < 26; i++) lastSeen[i] = -1;
    int left = 0, best = 0;
    for (int right = 0; right < text.length(); right++) {
      int letter = text.charAt(right) - 'a';
      left = Math.max(left, lastSeen[letter] + 1);
      lastSeen[letter] = right;
      best = Math.max(best, right - left + 1);
    }
    return best;
  }
}
