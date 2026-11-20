class Solution {
  public int maximumSubarraySum(int[] changes) {
    int ending = changes[0], best = changes[0];
    for (int i = 1; i < changes.length; i++) {
      ending = Math.max(changes[i], ending + changes[i]);
      best = Math.max(best, ending);
    }
    return best;
  }
}
