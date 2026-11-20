import java.util.Arrays;
class Solution {
  public int maxMeetings(int[][] meetings) {
    Arrays.sort(meetings, (a, b) -> a[1] != b[1] ? Integer.compare(a[1], b[1]) : Integer.compare(a[0], b[0]));
    int count = 0, endTime = 0;
    boolean hasMeeting = false;
    for (int[] meeting : meetings) {
      if (!hasMeeting || meeting[0] >= endTime) {
        count++; endTime = meeting[1]; hasMeeting = true;
      }
    }
    return count;
  }
}
