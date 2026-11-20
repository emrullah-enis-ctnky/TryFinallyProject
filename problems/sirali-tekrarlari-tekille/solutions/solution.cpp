#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> uniqueSorted(std::vector<int>& nums) { std::vector<int> r;for(int x:nums)if(r.empty()||r.back()!=x)r.push_back(x);return r; } };
