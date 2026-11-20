class Solution { public String longestCommonPrefix(String[] words) { String p=words[0];for(int i=1;i<words.length;i++){while(!words[i].startsWith(p))p=p.substring(0,p.length()-1);}return p; } }
