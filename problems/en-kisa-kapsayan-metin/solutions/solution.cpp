#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::string minimumCover(std::string text, std::string required) { if(required.empty())return "";int need[128]={},have[128]={};for(char c:required)need[(int)c]++;int missing=required.size(),left=0,bestStart=0,bestLen=INT_MAX;for(int right=0;right<(int)text.size();right++){char c=text[right];if(need[(int)c]&&have[(int)c]++<need[(int)c])missing--;while(!missing){if(right-left+1<bestLen){bestLen=right-left+1;bestStart=left;}char x=text[left++];if(need[(int)x]&&have[(int)x]--<=need[(int)x])missing++;}}return bestLen==INT_MAX?"":text.substr(bestStart,bestLen); } };
