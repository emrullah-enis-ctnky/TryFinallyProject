class Solution:
    def sumDigits(self, number):
        if number < 10:
            return number
        return number % 10 + self.sumDigits(number // 10)
