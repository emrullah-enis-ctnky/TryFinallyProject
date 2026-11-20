#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<std::vector<int>> addMatrices(std::vector<std::vector<int>>& a, std::vector<std::vector<int>>& b) { std::vector<std::vector<int>> r=a; for(int i=0;i<(int)a.size();i++) for(int j=0;j<(int)a[i].size();j++) r[i][j]+=b[i][j]; return r; } };
