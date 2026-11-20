#include <sstream>
#include <string>
#include <vector>
class Solution {
public:
  std::string reverseWords(std::string sentence) {
    std::istringstream input(sentence);
    std::vector<std::string> words;
    std::string word;
    while (input >> word) words.push_back(word);
    std::string result;
    for (int i = static_cast<int>(words.size()) - 1; i >= 0; --i) {
      if (!result.empty()) result += ' ';
      result += words[i];
    }
    return result;
  }
};
