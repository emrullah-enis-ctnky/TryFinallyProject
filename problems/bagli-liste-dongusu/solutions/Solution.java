class Solution {
  public boolean hasListCycle(int[] next, int head) {
    int slow = head, fast = head;
    while (fast != -1 && next[fast] != -1) {
      slow = next[slow];
      fast = next[next[fast]];
      if (slow == fast) return true;
    }
    return false;
  }
}
