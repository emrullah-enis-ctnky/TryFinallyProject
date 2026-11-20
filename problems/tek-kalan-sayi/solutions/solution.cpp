#include <vector>
class Solution {
public:
  int singleNumber(std::vector<int>& nums) {
    int answer = 0;
    for (int value : nums) answer ^= value;
    return answer;
  }
};
