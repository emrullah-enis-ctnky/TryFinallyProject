class Solution { public boolean isPalindrome(String text) { int l=0,r=text.length()-1;while(l<r){if(text.charAt(l)!=text.charAt(r))return false;l++;r--;}return true; } }
