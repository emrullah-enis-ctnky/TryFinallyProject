#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> circularNextGreater(std::vector<int>& nums) { std::vector<int> r(nums.size(),-1),st;int n=nums.size();for(int i=0;i<2*n;i++){int x=i%n;while(!st.empty()&&nums[st.back()]<nums[x]){r[st.back()]=nums[x];st.pop_back();}if(i<n)st.push_back(i);}return r; } };
