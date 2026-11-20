#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::string compressRuns(std::string text) { std::string r;for(int i=0;i<(int)text.size();){int j=i+1;while(j<(int)text.size()&&text[j]==text[i])j++;r+=text[i];if(j-i>1)r+=std::to_string(j-i);i=j;}return r; } };
