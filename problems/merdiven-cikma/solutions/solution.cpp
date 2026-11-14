class Solution {
public:
  int climbStairs(int n) {
    int previous = 1, current = 1;
    for (int i = 2; i <= n; i++) {
      int next = previous + current;
      previous = current;
      current = next;
    }
    return current;
  }
};
