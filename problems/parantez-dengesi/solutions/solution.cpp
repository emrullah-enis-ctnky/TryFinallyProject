#include <string>
#include <vector>
class Solution {
public:
  bool isBalanced(std::string text) {
    std::vector<char> stack;
    for (char ch : text) {
      if (ch == '(' || ch == '[' || ch == '{') stack.push_back(ch);
      else {
        if (stack.empty()) return false;
        char open = stack.back(); stack.pop_back();
        if ((ch == ')' && open != '(') || (ch == ']' && open != '[') || (ch == '}' && open != '{')) return false;
      }
    }
    return stack.empty();
  }
};
