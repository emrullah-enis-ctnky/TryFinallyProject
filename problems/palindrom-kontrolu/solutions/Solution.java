class Solution {
  public boolean isPalindrome(String text) {
    return new StringBuilder(text).reverse().toString().equals(text);
  }
}
