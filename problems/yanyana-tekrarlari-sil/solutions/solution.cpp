#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::string removeAdjacentDuplicates(std::string text) { std::string st;for(char c:text){if(!st.empty()&&st.back()==c)st.pop_back();else st.push_back(c);}return st; } };
