class Solution {
public:
  bool isPowerOfTwo(int size) { return size > 0 && (size & (size - 1)) == 0; }
};
