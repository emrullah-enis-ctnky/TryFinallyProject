import java.util.HashSet;
class Solution {
  public boolean containsDuplicate(int[] nums) {
    HashSet<Integer> seen = new HashSet<>();
    for (int value : nums) if (!seen.add(value)) return true;
    return false;
  }
}
