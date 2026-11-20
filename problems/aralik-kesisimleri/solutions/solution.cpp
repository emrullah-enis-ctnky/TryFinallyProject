#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<std::vector<int>> intervalIntersections(std::vector<std::vector<int>>& first, std::vector<std::vector<int>>& second) { std::vector<std::vector<int>> r;int i=0,j=0;while(i<first.size()&&j<second.size()){int l=std::max(first[i][0],second[j][0]),h=std::min(first[i][1],second[j][1]);if(l<=h)r.push_back({l,h});if(first[i][1]<second[j][1])i++;else j++;}return r; } };
