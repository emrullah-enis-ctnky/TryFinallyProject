#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::string longestCommonPrefix(std::vector<std::string>& words) { std::string p=words[0];for(int i=1;i<(int)words.size();i++){while(words[i].compare(0,p.size(),p)!=0)p.pop_back();}return p; } };
