#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool hasPairSum(std::vector<int>& nums, int target) { int l=0,r=(int)nums.size()-1; while(l<r){int s=nums[l]+nums[r];if(s==target)return true;if(s<target)++l;else --r;}return false; } };
