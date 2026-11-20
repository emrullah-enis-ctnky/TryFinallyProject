#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::string reverseText(std::string text) { std::reverse(text.begin(),text.end()); return text; } };
