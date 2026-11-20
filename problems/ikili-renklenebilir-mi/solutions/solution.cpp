#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool isBipartite(std::vector<std::vector<int>>& graph) { std::vector<int> color(graph.size());for(int s=0;s<(int)graph.size();s++)if(!color[s]){std::vector<int> q{s};color[s]=1;for(int i=0;i<(int)q.size();i++)for(int v:graph[q[i]]){if(!color[v])color[v]=-color[q[i]],q.push_back(v);else if(color[v]==color[q[i]])return false;}}return true; } };
