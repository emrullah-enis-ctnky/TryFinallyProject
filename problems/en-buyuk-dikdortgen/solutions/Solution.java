class Solution {
  public long largestHistogramArea(int[] heights) {
    int[] stack = new int[heights.length];
    int size = 0;
    long best = 0;
    for (int i = 0; i <= heights.length; i++) {
      int current = i == heights.length ? 0 : heights[i];
      while (size > 0 && heights[stack[size - 1]] > current) {
        int height = heights[stack[--size]];
        int left = size == 0 ? 0 : stack[size - 1] + 1;
        best = Math.max(best, (long) height * (i - left));
      }
      if (i < heights.length) stack[size++] = i;
    }
    return best;
  }
}
