#include <algorithm>
#include <vector>
class Solution {
public:
  int minimumMeetingRooms(std::vector<std::vector<int>>& meetings) {
    std::vector<int> starts, ends;
    for (const auto& meeting : meetings) { starts.push_back(meeting[0]); ends.push_back(meeting[1]); }
    std::sort(starts.begin(), starts.end());
    std::sort(ends.begin(), ends.end());
    int active = 0, best = 0, endIndex = 0;
    for (int start : starts) {
      while (endIndex < static_cast<int>(ends.size()) && start >= ends[endIndex]) { --active; ++endIndex; }
      ++active;
      best = std::max(best, active);
    }
    return best;
  }
};
