class Solution:
    def reverseWords(self, sentence):
        return " ".join(sentence.split()[::-1])
