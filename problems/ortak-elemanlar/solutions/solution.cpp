#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> commonValues(std::vector<int>& first, std::vector<int>& second) { std::set<int> a(first.begin(),first.end()), b; for(int x:second) if(a.count(x)) b.insert(x); return std::vector<int>(b.begin(),b.end()); } };
