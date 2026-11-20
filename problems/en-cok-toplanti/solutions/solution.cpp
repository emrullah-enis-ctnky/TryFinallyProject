#include <algorithm>
#include <vector>
class Solution {
public:
  int maxMeetings(std::vector<std::vector<int>>& meetings) {
    std::sort(meetings.begin(), meetings.end(), [](const auto& a, const auto& b) {
      return a[1] != b[1] ? a[1] < b[1] : a[0] < b[0];
    });
    int count = 0, endTime = 0;
    bool hasMeeting = false;
    for (const auto& meeting : meetings) {
      if (!hasMeeting || meeting[0] >= endTime) {
        ++count; endTime = meeting[1]; hasMeeting = true;
      }
    }
    return count;
  }
};
