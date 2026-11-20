class Solution {
  public int[] reverseQueuePrefix(int[] items, int k) {
    int[] result = new int[items.length];
    int out = 0;
    for (int i = k - 1; i >= 0; i--) result[out++] = items[i];
    for (int i = k; i < items.length; i++) result[out++] = items[i];
    return result;
  }
}
