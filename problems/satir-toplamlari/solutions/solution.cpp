#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: std::vector<int> rowSums(std::vector<std::vector<int>>& matrix) { std::vector<int> r; for(auto& row:matrix){int s=0;for(int x:row)s+=x;r.push_back(s);} return r; } };
