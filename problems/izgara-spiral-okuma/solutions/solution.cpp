#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> spiralOrder(std::vector<std::vector<int>>& matrix) { std::vector<int> r;if(matrix.empty()||matrix[0].empty())return r;int top=0,bottom=matrix.size()-1,left=0,right=matrix[0].size()-1;while(top<=bottom&&left<=right){for(int j=left;j<=right;j++)r.push_back(matrix[top][j]);top++;for(int i=top;i<=bottom;i++)r.push_back(matrix[i][right]);right--;if(top<=bottom){for(int j=right;j>=left;j--)r.push_back(matrix[bottom][j]);bottom--;}if(left<=right){for(int i=bottom;i>=top;i--)r.push_back(matrix[i][left]);left++;}}return r; } };
