#include <vector>
class Solution {
public:
  std::vector<int> rangeQuerySums(std::vector<int>& sales, std::vector<std::vector<int>>& queries) {
    std::vector<int> prefix(sales.size() + 1, 0), result;
    for (int i = 0; i < static_cast<int>(sales.size()); ++i) prefix[i + 1] = prefix[i] + sales[i];
    for (const auto& query : queries) result.push_back(prefix[query[1] + 1] - prefix[query[0]]);
    return result;
  }
};
