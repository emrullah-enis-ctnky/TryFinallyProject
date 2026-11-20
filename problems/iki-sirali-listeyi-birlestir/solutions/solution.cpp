#include <vector>
class Solution {
public:
  std::vector<int> mergeEncodedLists(std::vector<int>& values1, std::vector<int>& next1, int head1, std::vector<int>& values2, std::vector<int>& next2, int head2) {
    std::vector<int> result;
    int a = head1, b = head2;
    while (a != -1 && b != -1) {
      if (values1[a] <= values2[b]) { result.push_back(values1[a]); a = next1[a]; }
      else { result.push_back(values2[b]); b = next2[b]; }
    }
    while (a != -1) { result.push_back(values1[a]); a = next1[a]; }
    while (b != -1) { result.push_back(values2[b]); b = next2[b]; }
    return result;
  }
};
