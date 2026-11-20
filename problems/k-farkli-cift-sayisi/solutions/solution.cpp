#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int countKDifferencePairs(std::vector<int>& nums, int k) { std::unordered_map<int,int> frequency;for(int x:nums)frequency[x]++;int count=0;for(auto& entry:frequency)if(k==0?entry.second>1:frequency.count(entry.first+k))count++;return count; } };
