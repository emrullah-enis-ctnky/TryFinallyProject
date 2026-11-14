class Solution {
  public int countVowels(String text) {
    int count = 0;
    for (char ch : text.toLowerCase().toCharArray()) {
      if ("aeiou".indexOf(ch) >= 0) count++;
    }
    return count;
  }
}
