#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int startStation(std::vector<int>& fuel, std::vector<int>& cost) { long long total=0,tank=0;int start=0;for(int i=0;i<(int)fuel.size();i++){long long d=fuel[i]-cost[i];total+=d;tank+=d;if(tank<0){start=i+1;tank=0;}}return total<0?-1:start; } };
