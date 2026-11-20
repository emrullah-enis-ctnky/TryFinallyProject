#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int maximumWidthRamp(std::vector<int>& nums) { std::vector<int> st;for(int i=0;i<(int)nums.size();i++)if(st.empty()||nums[i]<nums[st.back()])st.push_back(i);int best=0;for(int j=nums.size()-1;j>=0;j--)while(!st.empty()&&nums[st.back()]<=nums[j]){best=std::max(best,j-st.back());st.pop_back();}return best; } };
