class Solution {
  public int[] rangeQuerySums(int[] sales, int[][] queries) {
    int[] prefix = new int[sales.length + 1], result = new int[queries.length];
    for (int i = 0; i < sales.length; i++) prefix[i + 1] = prefix[i] + sales[i];
    for (int i = 0; i < queries.length; i++) result[i] = prefix[queries[i][1] + 1] - prefix[queries[i][0]];
    return result;
  }
}
