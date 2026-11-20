class Solution {
  public boolean isPowerOfTwo(int size) { return size > 0 && (size & (size - 1)) == 0; }
}
