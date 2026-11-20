class Solution {
  public int[] sortPartColors(int[] colors) {
    int[] result = colors.clone();
    int low = 0, current = 0, high = result.length - 1;
    while (current <= high) {
      if (result[current] == 0) { int temp = result[low]; result[low++] = result[current]; result[current++] = temp; }
      else if (result[current] == 2) { int temp = result[current]; result[current] = result[high]; result[high--] = temp; }
      else current++;
    }
    return result;
  }
}
