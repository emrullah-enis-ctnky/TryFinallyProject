#include <queue>
#include <tuple>
#include <vector>
class Solution {
public:
  std::vector<int> mergeSortedStreams(std::vector<std::vector<int>>& streams) {
    using Entry = std::tuple<int, int, int>;
    std::priority_queue<Entry, std::vector<Entry>, std::greater<Entry>> queue;
    for (int i = 0; i < static_cast<int>(streams.size()); ++i)
      if (!streams[i].empty()) queue.emplace(streams[i][0], i, 0);
    std::vector<int> result;
    while (!queue.empty()) {
      auto [value, stream, index] = queue.top(); queue.pop();
      result.push_back(value);
      if (index + 1 < static_cast<int>(streams[stream].size()))
        queue.emplace(streams[stream][index + 1], stream, index + 1);
    }
    return result;
  }
};
