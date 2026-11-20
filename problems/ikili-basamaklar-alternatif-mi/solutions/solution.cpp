#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool hasAlternatingBits(int n) { int x=n^(n>>1);return (x&(x+1))==0; } };
