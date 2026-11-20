import java.util.*;
class Solution {
  public int minimumMeetingRooms(int[][] meetings) {
    int[] starts = new int[meetings.length], ends = new int[meetings.length];
    for (int i = 0; i < meetings.length; i++) { starts[i] = meetings[i][0]; ends[i] = meetings[i][1]; }
    Arrays.sort(starts);
    Arrays.sort(ends);
    int active = 0, best = 0, endIndex = 0;
    for (int start : starts) {
      while (endIndex < ends.length && start >= ends[endIndex]) { active--; endIndex++; }
      active++;
      best = Math.max(best, active);
    }
    return best;
  }
}
