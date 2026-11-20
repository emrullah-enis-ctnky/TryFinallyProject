#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: int minimumJumps(std::vector<int>& jumps) { if(jumps.size()==1)return 0;int steps=0,end=0,far=0;for(int i=0;i<(int)jumps.size()-1;i++){if(i>far)return -1;far=std::max(far,i+jumps[i]);if(i==end){if(far==end)return -1;steps++;end=far;if(end>=jumps.size()-1)return steps;}}return -1; } };
