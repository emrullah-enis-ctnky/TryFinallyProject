import java.util.*;
class Solution {
  public int evaluatePostfix(String[] tokens) {
    Deque<Integer> stack = new ArrayDeque<>();
    for (String token : tokens) {
      if (token.equals("+") || token.equals("-") || token.equals("*")) {
        int right = stack.pop(), left = stack.pop();
        stack.push(token.equals("+") ? left + right : token.equals("-") ? left - right : left * right);
      } else stack.push(Integer.parseInt(token));
    }
    return stack.pop();
  }
}
