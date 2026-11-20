#include <string>
#include <vector>
class Solution {
public:
  int evaluatePostfix(std::vector<std::string>& tokens) {
    std::vector<int> stack;
    for (const std::string& token : tokens) {
      if (token.size() == 1 && (token[0] == '+' || token[0] == '-' || token[0] == '*')) {
        int right = stack.back(); stack.pop_back();
        int left = stack.back(); stack.pop_back();
        stack.push_back(token[0] == '+' ? left + right : token[0] == '-' ? left - right : left * right);
      } else stack.push_back(std::stoi(token));
    }
    return stack.back();
  }
};
