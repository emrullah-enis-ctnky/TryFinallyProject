#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::string mergeAlternately(std::string first, std::string second) { std::string r;int i=0;while(i<first.size()||i<second.size()){if(i<first.size())r+=first[i];if(i<second.size())r+=second[i];i++;}return r; } };
