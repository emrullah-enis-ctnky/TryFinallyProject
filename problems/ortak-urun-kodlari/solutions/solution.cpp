#include <algorithm>
#include <unordered_set>
#include <vector>
class Solution {
public:
  std::vector<int> sharedProductCodes(std::vector<int>& first, std::vector<int>& second) {
    std::unordered_set<int> values(first.begin(), first.end()), common;
    for (int value : second) if (values.count(value)) common.insert(value);
    std::vector<int> result(common.begin(), common.end());
    std::sort(result.begin(), result.end());
    return result;
  }
};
