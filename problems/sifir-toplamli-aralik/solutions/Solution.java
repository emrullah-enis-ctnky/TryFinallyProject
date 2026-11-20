import java.util.HashSet;
class Solution {
  public boolean hasZeroSumRange(int[] nums) {
    HashSet<Long> seen = new HashSet<>(); seen.add(0L); long sum = 0;
    for (int value : nums) { sum += value; if (!seen.add(sum)) return true; }
    return false;
  }
}
