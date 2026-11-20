#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::string reverseVowels(std::string text) { std::string v="aeiouAEIOU";int l=0,r=text.size()-1;while(l<r){while(l<r&&v.find(text[l])==std::string::npos)l++;while(l<r&&v.find(text[r])==std::string::npos)r--;std::swap(text[l++],text[r--]);}return text; } };
