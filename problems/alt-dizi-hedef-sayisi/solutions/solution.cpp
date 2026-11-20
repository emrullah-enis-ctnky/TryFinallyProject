#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int countTargetSubarrays(std::vector<int>& nums, int target) { std::unordered_map<int,int> f;f[0]=1;int sum=0,ans=0;for(int x:nums){sum+=x;if(f.count(sum-target))ans+=f[sum-target];f[sum]++;}return ans; } };
