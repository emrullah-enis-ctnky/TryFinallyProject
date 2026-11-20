#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int integerSquareRoot(int n) { long long l=0,r=n;while(l<=r){long long m=(l+r)/2;if(m*m<=n)l=m+1;else r=m-1;}return (int)r; } };
