#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int bitDifferenceCount(int a, int b) { unsigned int x=(unsigned int)(a^b);int c=0;while(x){c+=x&1;x>>=1;}return c; } };
