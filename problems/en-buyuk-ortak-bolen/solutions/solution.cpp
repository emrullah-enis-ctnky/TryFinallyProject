#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int greatestCommonDivisor(int a, int b) { return b==0?a:greatestCommonDivisor(b,a%b); } };
