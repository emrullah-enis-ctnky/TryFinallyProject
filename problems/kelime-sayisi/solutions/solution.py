class Solution:
    def countWords(self, text):
        return 0 if not text else text.count(" ") + 1
