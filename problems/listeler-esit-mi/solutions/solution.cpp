#include <vector>

class Solution {
public:
  bool areListsEqual(const std::vector<int>& list1, const std::vector<int>& list2) {
    if (list1.size() != list2.size()) return false;
    for (size_t i = 0; i < list1.size(); i++) {
      if (list1[i] != list2[i]) return false;
    }
    return true;
  }
};
