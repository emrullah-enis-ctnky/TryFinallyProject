#include <algorithm>
#include <vector>
class Solution {
public:
  int minimumArrows(std::vector<std::vector<int>>& balloons) {
    if (balloons.empty()) return 0;
    auto sorted = balloons;
    std::sort(sorted.begin(), sorted.end(), [](const auto& a, const auto& b) { return a[1] < b[1]; });
    int arrows = 0, position = 0;
    for (const auto& balloon : sorted) if (arrows == 0 || balloon[0] > position) {
      ++arrows;
      position = balloon[1];
    }
    return arrows;
  }
};
