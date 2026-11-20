#include <algorithm>
#include <climits>
#include <deque>
#include <set>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <vector>
class Solution { public: bool hasPath(int n, std::vector<std::vector<int>>& edges, int source, int destination) { std::vector<std::vector<int>> g(n);for(auto&e:edges){g[e[0]].push_back(e[1]);g[e[1]].push_back(e[0]);}std::vector<int> st{source};std::vector<bool> seen(n);seen[source]=true;while(!st.empty()){int u=st.back();st.pop_back();if(u==destination)return true;for(int v:g[u])if(!seen[v])seen[v]=true,st.push_back(v);}return false; } };
