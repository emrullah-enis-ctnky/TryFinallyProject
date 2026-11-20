class Solution {
  public int middleListIndex(int[] values, int[] next, int head) {
    int slow = head, fast = head;
    while (fast != -1 && next[fast] != -1) { slow = next[slow]; fast = next[next[fast]]; }
    return slow;
  }
}
