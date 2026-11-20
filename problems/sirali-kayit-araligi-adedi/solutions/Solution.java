class Solution {
  public int countCodeOccurrences(int[] codes, int target) {
    int left = 0, right = codes.length;
    long search = target;
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (codes[mid] < search) left = mid + 1;
      else right = mid;
    }
    int first = left;
    left = 0;
    right = codes.length;
    search = (long) target + 1;
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (codes[mid] < search) left = mid + 1;
      else right = mid;
    }
    return left - first;
  }
