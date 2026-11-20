#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> targetRange(std::vector<int>& nums, int target) { int l=0,r=nums.size();while(l<r){int m=(l+r)/2;if(nums[m]<target)l=m+1;else r=m;}int first=l;if(first==(int)nums.size()||nums[first]!=target)return {-1,-1};l=first;r=nums.size();while(l<r){int m=(l+r)/2;if(nums[m]<=target)l=m+1;else r=m;}return {first,l-1}; } };
