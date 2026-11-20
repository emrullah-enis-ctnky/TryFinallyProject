#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> nextGreaterValues(std::vector<int>& nums) { std::vector<int> r(nums.size(),-1), st; for(int i=0;i<(int)nums.size();i++){while(!st.empty() && nums[st.back()]<nums[i]){r[st.back()]=nums[i];st.pop_back();}st.push_back(i);}return r; } };
