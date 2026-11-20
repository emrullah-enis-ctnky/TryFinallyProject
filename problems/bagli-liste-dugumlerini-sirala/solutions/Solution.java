import java.util.*;
class Solution {
  public int[] sortedListOrder(int[] values, int[] next, int head) {
    int size = 0;
    for (int node = head; node != -1; node = next[node]) size++;
    int[] order = new int[size], buffer = new int[size];
    int out = 0;
    for (int node = head; node != -1; node = next[node]) order[out++] = node;
    for (int width = 1; width < size; width *= 2) {
      for (int left = 0; left < size; left += 2 * width) {
        int mid = Math.min(left + width, size), right = Math.min(left + 2 * width, size);
        int i = left, j = mid, at = left;
        while (i < mid || j < right) {
          if (j == right || (i < mid && values[order[i]] <= values[order[j]])) buffer[at++] = order[i++];
          else buffer[at++] = order[j++];
        }
      }
      int[] temp = order; order = buffer; buffer = temp;
    }
    return order;
  }
}
