#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int longestCommonSubsequence(std::string first, std::string second) { std::vector<std::vector<int>> d(first.size()+1,std::vector<int>(second.size()+1));for(int i=1;i<=first.size();i++)for(int j=1;j<=second.size();j++)d[i][j]=first[i-1]==second[j-1]?d[i-1][j-1]+1:std::max(d[i-1][j],d[i][j-1]);return d[first.size()][second.size()]; } };
