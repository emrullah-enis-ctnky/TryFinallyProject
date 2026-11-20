#include <deque>
#include <vector>
class Solution {
public:
  std::vector<int> firstNegativePerWindow(std::vector<int>& values, int k) {
    std::deque<int> negatives;
    std::vector<int> result;
    for (int i = 0; i < static_cast<int>(values.size()); ++i) {
      if (values[i] < 0) negatives.push_back(i);
      while (!negatives.empty() && negatives.front() <= i - k) negatives.pop_front();
      if (i >= k - 1) result.push_back(negatives.empty() ? 0 : values[negatives.front()]);
    }
    return result;
  }
};
