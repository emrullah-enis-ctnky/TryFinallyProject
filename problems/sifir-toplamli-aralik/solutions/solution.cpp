#include <unordered_set>
#include <vector>
class Solution {
public:
  bool hasZeroSumRange(std::vector<int>& nums) {
    std::unordered_set<long long> seen{0}; long long sum = 0;
    for (int value : nums) { sum += value; if (seen.count(sum)) return true; seen.insert(sum); }
    return false;
  }
};
