#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int diagonalSum(std::vector<std::vector<int>>& matrix) { int n=matrix.size(),sum=0;for(int i=0;i<n;i++){sum+=matrix[i][i];if(i!=n-1-i)sum+=matrix[i][n-1-i];}return sum; } };
