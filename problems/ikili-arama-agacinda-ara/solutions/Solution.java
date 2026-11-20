class Solution {
  public boolean searchEncodedBst(int[] nodes, int target) {
    int index = 0;
    while (index < nodes.length && nodes[index] != -1) {
      if (nodes[index] == target) return true;
      index = 2 * index + (target < nodes[index] ? 1 : 2);
    }
    return false;
  }
}
