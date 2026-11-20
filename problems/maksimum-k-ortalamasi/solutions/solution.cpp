#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: double maximumAverage(std::vector<int>& nums, int k) { long long sum=0;for(int i=0;i<k;i++)sum+=nums[i];long long best=sum;for(int i=k;i<(int)nums.size();i++){sum+=nums[i]-nums[i-k];best=std::max(best,sum);}return (double)best/k; } };
