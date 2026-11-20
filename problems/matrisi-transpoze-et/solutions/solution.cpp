#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<std::vector<int>> transpose(std::vector<std::vector<int>>& matrix) { if(matrix.empty())return {};int m=matrix[0].size();std::vector<std::vector<int>> r(m,std::vector<int>(matrix.size()));for(int i=0;i<(int)matrix.size();i++)for(int j=0;j<m;j++)r[j][i]=matrix[i][j];return r; } };
