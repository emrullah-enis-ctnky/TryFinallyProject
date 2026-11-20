#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> rangeQuerySums(std::vector<int>& nums, std::vector<std::vector<int>>& queries) { std::vector<int> p(nums.size()+1);for(int i=0;i<(int)nums.size();i++)p[i+1]=p[i]+nums[i];std::vector<int> r;for(auto&q:queries)r.push_back(p[q[1]+1]-p[q[0]]);return r; } };
