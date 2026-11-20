#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> windowMaximums(std::vector<int>& nums, int k) { std::deque<int> q;std::vector<int> r;for(int i=0;i<(int)nums.size();i++){while(!q.empty()&&q.front()<=i-k)q.pop_front();while(!q.empty()&&nums[q.back()]<=nums[i])q.pop_back();q.push_back(i);if(i>=k-1)r.push_back(nums[q.front()]);}return r; } };
