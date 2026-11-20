#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> nextPermutation(std::vector<int>& nums) { std::vector<int> r=nums;int i=r.size()-2;while(i>=0&&r[i]>=r[i+1])i--;if(i>=0){int j=r.size()-1;while(r[j]<=r[i])j--;std::swap(r[i],r[j]);}std::reverse(r.begin()+i+1,r.end());return r; } };
