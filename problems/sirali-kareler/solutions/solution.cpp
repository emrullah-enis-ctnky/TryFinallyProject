#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> sortedSquares(std::vector<int>& nums) { std::vector<int> r(nums.size());int l=0,h=(int)nums.size()-1;for(int i=h;i>=0;--i){int a=nums[l]*nums[l],b=nums[h]*nums[h];if(a>b){r[i]=a;++l;}else{r[i]=b;--h;}}return r; } };
