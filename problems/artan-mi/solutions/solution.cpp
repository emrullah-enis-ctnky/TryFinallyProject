#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool isStrictlyIncreasing(std::vector<int>& nums) { for(int i=1;i<(int)nums.size();++i) if(nums[i]<=nums[i-1]) return false; return true; } };
