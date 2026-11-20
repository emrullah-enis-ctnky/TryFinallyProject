class Solution:
    def countVowels(self, text):
        return sum(c in "aeiouAEIOU" for c in text)
