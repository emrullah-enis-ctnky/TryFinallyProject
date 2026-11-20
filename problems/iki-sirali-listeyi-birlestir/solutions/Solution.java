class Solution {
  public int[] mergeEncodedLists(int[] values1, int[] next1, int head1, int[] values2, int[] next2, int head2) {
    int total = 0;
    for (int node = head1; node != -1; node = next1[node]) total++;
    for (int node = head2; node != -1; node = next2[node]) total++;
    int[] result = new int[total];
    int a = head1, b = head2, out = 0;
    while (a != -1 && b != -1) {
      if (values1[a] <= values2[b]) { result[out++] = values1[a]; a = next1[a]; }
      else { result[out++] = values2[b]; b = next2[b]; }
    }
    while (a != -1) { result[out++] = values1[a]; a = next1[a]; }
    while (b != -1) { result[out++] = values2[b]; b = next2[b]; }
    return result;
  }
}
