class Solution {
public:
  int sumDigits(int number) {
    if (number < 10) return number;
    return number % 10 + sumDigits(number / 10);
  }
};
