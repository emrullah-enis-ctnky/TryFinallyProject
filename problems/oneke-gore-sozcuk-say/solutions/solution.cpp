#include <string>
#include <vector>
class Solution {
public:
  std::vector<int> prefixWordCounts(std::vector<std::string>& words, std::vector<std::string>& prefixes) {
    int capacity = 1;
    for (const auto& word : words) capacity += static_cast<int>(word.size());
    std::vector<std::vector<int>> children;
    std::vector<int> counts;
    children.reserve(capacity);
    counts.reserve(capacity);
    children.emplace_back(26, -1);
    counts.push_back(0);
    for (const auto& word : words) {
      int node = 0;
      ++counts[node];
      for (char ch : word) {
        int letter = ch - 'a';
        if (children[node][letter] == -1) {
          children[node][letter] = static_cast<int>(children.size());
          children.emplace_back(26, -1);
          counts.push_back(0);
        }
        node = children[node][letter];
        ++counts[node];
      }
    }
    std::vector<int> result;
    for (const auto& prefix : prefixes) {
      int node = 0;
      for (char ch : prefix) {
        node = children[node][ch - 'a'];
        if (node == -1) break;
      }
      result.push_back(node == -1 ? 0 : counts[node]);
    }
    return result;
  }
};
