class Solution {
  public boolean areAnagrams(String first, String second) {
    if (first.length() != second.length()) return false;
    int[] counts = new int[26];
    for (int i = 0; i < first.length(); i++) {
      counts[first.charAt(i) - 'a']++;
      counts[second.charAt(i) - 'a']--;
    }
    for (int count : counts) if (count != 0) return false;
    return true;
  }
}
