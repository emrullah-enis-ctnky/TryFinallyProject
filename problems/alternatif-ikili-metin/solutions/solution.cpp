#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int minimumAlternatingFlips(std::string bits) { int a=0,b=0;for(int i=0;i<bits.size();i++){char x=(i%2?'1':'0');if(bits[i]!=x)a++;if(bits[i]==x)b++;}return std::min(a,b); } };
