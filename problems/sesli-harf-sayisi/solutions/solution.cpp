#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int countVowels(std::string text) { int n=0; for(char c:text) if(std::string("aeiouAEIOU").find(c)!=std::string::npos) ++n; return n; } };
