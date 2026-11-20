#include <string>
#include <vector>
class Solution {
public:
  std::string replaceWithShortestRoots(std::vector<std::string>& roots, std::string sentence) {
    std::vector<std::vector<int>> children(1, std::vector<int>(26, -1));
    std::vector<char> terminal(1, false);
    for (const std::string& root : roots) {
      int node = 0;
      for (char ch : root) {
        int letter = ch - 'a';
        if (children[node][letter] == -1) {
          children[node][letter] = static_cast<int>(children.size());
          children.emplace_back(26, -1);
          terminal.push_back(false);
        }
        node = children[node][letter];
      }
      terminal[node] = true;
    }
    std::string result, word;
    for (int i = 0; i <= static_cast<int>(sentence.size()); ++i) {
      if (i < static_cast<int>(sentence.size()) && sentence[i] != ' ') { word.push_back(sentence[i]); continue; }
      int node = 0, length = 0, matched = 0;
      for (char ch : word) {
        int next = children[node][ch - 'a'];
        if (next == -1) break;
        node = next; ++length;
        if (terminal[node]) { matched = length; break; }
      }
      if (!result.empty()) result.push_back(' ');
      result += matched == 0 ? word : word.substr(0, matched);
      word.clear();
    }
    return result;
  }
};
