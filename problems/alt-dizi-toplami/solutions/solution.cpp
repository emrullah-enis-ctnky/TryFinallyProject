#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int sumEvenIndices(std::vector<int>& nums) { int s=0; for(int i=0;i<(int)nums.size();i+=2) s+=nums[i]; return s; } };
