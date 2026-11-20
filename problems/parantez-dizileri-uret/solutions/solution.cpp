#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<std::string> generateParentheses(int n) { std::vector<std::string> level{""};for(int length=0;length<2*n;length++){std::vector<std::string> next;for(auto&s:level){int open=0,close=0;for(char c:s)c=='('?open++:close++;if(open<n)next.push_back(s+"(");if(close<open)next.push_back(s+")");}level=next;}std::sort(level.begin(),level.end());return level; } };
