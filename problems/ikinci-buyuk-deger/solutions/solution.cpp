#include <vector>
class Solution {
public:
  int secondLargest(std::vector<int>& nums) {
    int largest = 0, second = 0;
    bool hasLargest = false, hasSecond = false;
    for (int value : nums) {
      if (!hasLargest || value > largest) {
        if (!hasLargest || value != largest) {
          if (hasLargest) { second = largest; hasSecond = true; }
          largest = value; hasLargest = true;
        }
      } else if (value != largest && (!hasSecond || value > second)) {
        second = value; hasSecond = true;
      }
    }
    return second;
  }
};
