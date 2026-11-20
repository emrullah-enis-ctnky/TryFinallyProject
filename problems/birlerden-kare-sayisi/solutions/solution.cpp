#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int countOneSquares(std::vector<std::vector<int>>& grid) { int rows=grid.size();if(!rows)return 0;int cols=grid[0].size(),total=0;std::vector<int>d(cols+1);for(int i=1;i<=rows;i++){int diagonal=0;for(int j=1;j<=cols;j++){int up=d[j];if(grid[i-1][j-1]){d[j]=1+std::min(d[j],std::min(d[j-1],diagonal));total+=d[j];}else d[j]=0;diagonal=up;}}return total; } };
