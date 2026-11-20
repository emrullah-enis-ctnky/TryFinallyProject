class Solution {
public:
  bool isPerfectSquare(int count) {
    if (count < 0) return false;
    long long left = 0, right = count;
    while (left <= right) {
      long long middle = left + (right - left) / 2;
      long long square = middle * middle;
      if (square == count) return true;
      if (square < count) left = middle + 1;
      else right = middle - 1;
    }
    return false;
  }
};
