#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> withoutTarget(std::vector<int>& nums, int target) { std::vector<int> r;for(int x:nums)if(x!=target)r.push_back(x);return r; } };
