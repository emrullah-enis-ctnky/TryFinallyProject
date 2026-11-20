#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool isPalindrome(std::string text) { int l=0,r=(int)text.size()-1;while(l<r){if(text[l]!=text[r])return false;++l;--r;}return true; } };
