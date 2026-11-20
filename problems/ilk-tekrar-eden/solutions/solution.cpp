#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int firstRepeated(std::vector<int>& nums) { std::unordered_set<int> seen;for(int x:nums){if(seen.count(x))return x;seen.insert(x);}return -1; } };
