#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int maxWindowSum(std::vector<int>& nums, int k) { int sum=0;for(int i=0;i<k;i++)sum+=nums[i];int best=sum;for(int i=k;i<(int)nums.size();i++){sum+=nums[i]-nums[i-k];if(sum>best)best=sum;}return best; } };
