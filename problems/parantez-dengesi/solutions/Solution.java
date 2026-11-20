class Solution {
  public boolean isBalanced(String text) {
    char[] stack = new char[text.length()];
    int size = 0;
    for (char ch : text.toCharArray()) {
      if (ch == '(' || ch == '[' || ch == '{') stack[size++] = ch;
      else {
        if (size == 0) return false;
        char open = stack[--size];
        if ((ch == ')' && open != '(') || (ch == ']' && open != '[') || (ch == '}' && open != '{')) return false;
      }
    }
    return size == 0;
  }
}
