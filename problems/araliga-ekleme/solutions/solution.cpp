#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<std::vector<int>> insertInterval(std::vector<std::vector<int>>& intervals, std::vector<int>& added) { std::vector<std::vector<int>> r;int i=0,n=intervals.size();while(i<n&&intervals[i][1]<added[0])r.push_back(intervals[i++]);while(i<n&&intervals[i][0]<=added[1]){added[0]=std::min(added[0],intervals[i][0]);added[1]=std::max(added[1],intervals[i][1]);i++;}r.push_back(added);while(i<n)r.push_back(intervals[i++]);return r; } };
