#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int longestOnesAfterFlips(std::vector<int>& bits, int k) { int left=0,zeros=0,best=0;for(int right=0;right<(int)bits.size();right++){if(bits[right]==0)zeros++;while(zeros>k)if(bits[left++]==0)zeros--;best=std::max(best,right-left+1);}return best; } };
