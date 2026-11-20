#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int searchInsert(std::vector<int>& nums, int target) { int l=0,r=nums.size();while(l<r){int m=l+(r-l)/2;if(nums[m]<target)l=m+1;else r=m;}return l; } };
