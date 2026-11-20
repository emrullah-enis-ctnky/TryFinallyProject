class Solution {
  public int peakIndex(int[] heights) {
    int left = 0, right = heights.length - 1;
    while (left < right) {
      int middle = left + (right - left) / 2;
      if (heights[middle] < heights[middle + 1]) left = middle + 1;
      else right = middle;
    }
    return left;
  }
}
