#include <algorithm>
#include <string>
#include <vector>
class Solution {
public:
  int minimumEdits(std::string source, std::string target) {
    std::vector<int> previous(target.size() + 1), current(target.size() + 1);
    for (int j = 0; j <= static_cast<int>(target.size()); ++j) previous[j] = j;
    for (int i = 1; i <= static_cast<int>(source.size()); ++i) {
      current[0] = i;
      for (int j = 1; j <= static_cast<int>(target.size()); ++j) {
        current[j] = source[i - 1] == target[j - 1] ? previous[j - 1]
            : 1 + std::min(previous[j - 1], std::min(previous[j], current[j - 1]));
      }
      previous.swap(current);
    }
    return previous.back();
  }
};
