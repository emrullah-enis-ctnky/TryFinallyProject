#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int decodeWays(std::string code) { if(code[0]=='0')return 0;int prev2=1,prev1=1;for(int i=1;i<(int)code.size();i++){int cur=0;if(code[i]!='0')cur+=prev1;int v=(code[i-1]-'0')*10+code[i]-'0';if(v>=10&&v<=26)cur+=prev2;prev2=prev1;prev1=cur;}return prev1; } };
