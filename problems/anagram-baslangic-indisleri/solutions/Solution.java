import java.util.*;
class Solution {
  public int[] anagramStartIndices(String text, String pattern) {
    List<Integer> result = new ArrayList<>();
    if (text.length() < pattern.length()) return new int[0];
    int[] wanted = new int[26], window = new int[26];
    for (int i = 0; i < pattern.length(); i++) wanted[pattern.charAt(i) - 'a']++;
    for (int i = 0; i < pattern.length(); i++) window[text.charAt(i) - 'a']++;
    for (int start = 0; start + pattern.length() <= text.length(); start++) {
      if (Arrays.equals(wanted, window)) result.add(start);
      if (start + pattern.length() < text.length()) {
        window[text.charAt(start) - 'a']--;
        window[text.charAt(start + pattern.length()) - 'a']++;
      }
    }
    int[] answer = new int[result.size()];
    for (int i = 0; i < answer.length; i++) answer[i] = result.get(i);
    return answer;
  }
}
