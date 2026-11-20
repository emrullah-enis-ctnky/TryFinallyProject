#include <vector>
class Solution {
public:
  std::vector<int> daysUntilWarmer(std::vector<int>& temperatures) {
    std::vector<int> answer(temperatures.size(), 0), stack;
    for (int day = 0; day < static_cast<int>(temperatures.size()); ++day) {
      while (!stack.empty() && temperatures[day] > temperatures[stack.back()]) {
        int previous = stack.back(); stack.pop_back();
        answer[previous] = day - previous;
      }
      stack.push_back(day);
    }
    return answer;
  }
};
