import java.util.*;
class Solution {
  public int minimumArrows(int[][] balloons) {
    if (balloons.length == 0) return 0;
    int[][] sorted = balloons.clone();
    Arrays.sort(sorted, (a, b) -> Integer.compare(a[1], b[1]));
    int arrows = 0, position = 0;
    for (int[] balloon : sorted) if (arrows == 0 || balloon[0] > position) {
      arrows++;
      position = balloon[1];
    }
    return arrows;
  }
}
