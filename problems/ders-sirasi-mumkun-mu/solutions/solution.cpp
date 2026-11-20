#include <queue>
#include <vector>
class Solution {
public:
  bool canFinishCourses(int n, std::vector<std::vector<int>>& prerequisites) {
    std::vector<std::vector<int>> next(n);
    std::vector<int> indegree(n, 0);
    for (const auto& pair : prerequisites) { next[pair[1]].push_back(pair[0]); ++indegree[pair[0]]; }
    std::queue<int> ready;
    for (int i = 0; i < n; ++i) if (indegree[i] == 0) ready.push(i);
    int completed = 0;
    while (!ready.empty()) {
      int course = ready.front(); ready.pop(); ++completed;
      for (int following : next[course]) if (--indegree[following] == 0) ready.push(following);
    }
    return completed == n;
  }
};
