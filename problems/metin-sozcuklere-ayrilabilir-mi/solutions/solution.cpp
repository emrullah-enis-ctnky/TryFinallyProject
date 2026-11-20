#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool canSegment(std::string text, std::vector<std::string>& words) { std::vector<bool> dp(text.size()+1);dp[0]=true;for(int i=0;i<(int)text.size();i++)if(dp[i])for(auto&w:words)if(i+(int)w.size()<=(int)text.size()&&text.compare(i,w.size(),w)==0)dp[i+w.size()]=true;return dp[text.size()]; } };
