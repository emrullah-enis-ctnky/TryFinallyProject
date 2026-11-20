#include <vector>
class Solution {
public:
  std::vector<int> mergeSortedRecords(std::vector<int>& a, std::vector<int>& b) {
    std::vector<int> result;
    int i = 0, j = 0;
    while (i < static_cast<int>(a.size()) && j < static_cast<int>(b.size()))
      result.push_back(a[i] <= b[j] ? a[i++] : b[j++]);
    while (i < static_cast<int>(a.size())) result.push_back(a[i++]);
    while (j < static_cast<int>(b.size())) result.push_back(b[j++]);
    return result;
  }
};
