#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool isMountain(std::vector<int>& nums) { int i=0;while(i+1<nums.size()&&nums[i]<nums[i+1])i++;if(i==0||i==(int)nums.size()-1)return false;while(i+1<nums.size()&&nums[i]>nums[i+1])i++;return i==(int)nums.size()-1; } };
