class Solution {
  public int[] reverseListValues(int[] values, int[] next, int head) {
    int length = 0;
    for (int node = head; node != -1; node = next[node]) length++;
    int[] result = new int[length];
    int index = length - 1;
    for (int node = head; node != -1; node = next[node]) result[index--] = values[node];
    return result;
  }
}
