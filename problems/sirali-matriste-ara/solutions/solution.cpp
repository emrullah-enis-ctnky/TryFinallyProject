#include <vector>
class Solution {
public:
  bool searchSortedMatrix(std::vector<std::vector<int>>& matrix, int target) {
    int rows = static_cast<int>(matrix.size()), cols = static_cast<int>(matrix[0].size());
    int left = 0, right = rows * cols - 1;
    while (left <= right) {
      int middle = left + (right - left) / 2;
      int value = matrix[middle / cols][middle % cols];
      if (value == target) return true;
      if (value < target) left = middle + 1;
      else right = middle - 1;
    }
    return false;
  }
};
