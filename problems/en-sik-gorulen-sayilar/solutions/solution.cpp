#include <algorithm>
#include <unordered_map>
#include <vector>
class Solution {
public:
  std::vector<int> topFrequentValues(std::vector<int>& values, int k) {
    std::unordered_map<int, int> count;
    for (int value : values) ++count[value];
    std::vector<int> result;
    for (const auto& entry : count) result.push_back(entry.first);
    std::sort(result.begin(), result.end(), [&](int a, int b) {
      return count[a] != count[b] ? count[a] > count[b] : a < b;
    });
    result.resize(k);
    return result;
  }
};
