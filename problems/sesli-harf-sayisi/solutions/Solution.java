class Solution { public int countVowels(String text) { int n=0; for(char c:text.toCharArray()) if("aeiouAEIOU".indexOf(c)>=0) n++; return n; } }
