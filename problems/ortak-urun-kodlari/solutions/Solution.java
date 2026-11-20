import java.util.*;
class Solution {
  public int[] sharedProductCodes(int[] first, int[] second) {
    Set<Integer> values = new HashSet<>(), common = new TreeSet<>();
    for (int value : first) values.add(value);
    for (int value : second) if (values.contains(value)) common.add(value);
    int[] result = new int[common.size()];
    int i = 0;
    for (int value : common) result[i++] = value;
    return result;
  }
}
