#include <string>
class Solution {
public:
  bool areAnagrams(std::string first, std::string second) {
    if (first.size() != second.size()) return false;
    int counts[26] = {};
    for (std::size_t i = 0; i < first.size(); ++i) { ++counts[first[i] - 'a']; --counts[second[i] - 'a']; }
    for (int count : counts) if (count != 0) return false;
    return true;
  }
};
