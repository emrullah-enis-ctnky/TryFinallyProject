#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> pascalRow(int rowIndex) { std::vector<int> r(rowIndex+1,0);r[0]=1;for(int i=1;i<=rowIndex;i++)for(int j=i;j>=1;j--)r[j]+=r[j-1];return r; } };
