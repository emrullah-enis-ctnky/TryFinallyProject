#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int maxProductSubarray(std::vector<int>& nums) { int hi=nums[0],lo=nums[0],best=nums[0];for(int i=1;i<(int)nums.size();i++){int x=nums[i];if(x<0)std::swap(hi,lo);hi=std::max(x,hi*x);lo=std::min(x,lo*x);best=std::max(best,hi);}return best; } };
