#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int maxNonOverlappingIntervals(std::vector<std::vector<int>>& intervals) { std::sort(intervals.begin(),intervals.end(),[](auto&a,auto&b){return a[1]<b[1];});int count=0,end=-2147483647-1;for(auto&x:intervals)if(x[0]>=end){count++;end=x[1];}return count; } };
