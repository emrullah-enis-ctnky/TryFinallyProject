#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int minimumCoins(std::vector<int>& coins, int amount) { std::vector<int> d(amount+1,amount+1);d[0]=0;for(int a=1;a<=amount;a++)for(int c:coins)if(c<=a)d[a]=std::min(d[a],d[a-c]+1);return d[amount]>amount?-1:d[amount]; } };
