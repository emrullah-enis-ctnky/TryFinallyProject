#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int unlimitedTradeProfit(std::vector<int>& prices) { int profit=0;for(int i=1;i<(int)prices.size();i++)if(prices[i]>prices[i-1])profit+=prices[i]-prices[i-1];return profit; } };
