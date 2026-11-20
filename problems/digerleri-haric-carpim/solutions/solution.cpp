#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> productsExceptSelf(std::vector<int>& nums) { std::vector<int> r(nums.size(),1);int p=1;for(int i=0;i<(int)nums.size();i++){r[i]=p;p*=nums[i];}p=1;for(int i=(int)nums.size()-1;i>=0;i--){r[i]*=p;p*=nums[i];}return r; } };
