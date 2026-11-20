class Solution {
public:
  int countSetBits(int number) {
    int count = 0;
    while (number != 0) { number &= number - 1; ++count; }
    return count;
  }
};
