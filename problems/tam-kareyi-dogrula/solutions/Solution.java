class Solution {
  public boolean isPerfectSquare(int count) {
    if (count < 0) return false;
    long left = 0, right = count;
    while (left <= right) {
      long middle = left + (right - left) / 2;
      long square = middle * middle;
      if (square == count) return true;
      if (square < count) left = middle + 1;
      else right = middle - 1;
    }
    return false;
  }
}
