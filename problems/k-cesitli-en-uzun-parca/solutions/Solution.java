class Solution {
  public int longestLimitedAlphabetRun(String text, int k) {
    int[] counts = new int[26];
    int left = 0, distinct = 0, best = 0;
    for (int right = 0; right < text.length(); right++) {
      if (counts[text.charAt(right) - 'a']++ == 0) distinct++;
      while (distinct > k) if (--counts[text.charAt(left++) - 'a'] == 0) distinct--;
      best = Math.max(best, right - left + 1);
    }
    return best;
  }
}
