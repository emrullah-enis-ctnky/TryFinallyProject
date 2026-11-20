#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int smallestDivisor(std::vector<int>& nums, int threshold) { int l=1,r=*std::max_element(nums.begin(),nums.end());while(l<r){int m=l+(r-l)/2;long long sum=0;for(int x:nums)sum+=(x+m-1)/m;if(sum<=threshold)r=m;else l=m+1;}return l; } };
