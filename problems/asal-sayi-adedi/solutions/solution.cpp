#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int countPrimes(int n) { if(n<=2)return 0;std::vector<bool> prime(n,true);prime[0]=prime[1]=false;for(long long i=2;i*i<n;i++)if(prime[i])for(long long j=i*i;j<n;j+=i)prime[j]=false;int count=0;for(bool x:prime)count+=x;return count; } };
