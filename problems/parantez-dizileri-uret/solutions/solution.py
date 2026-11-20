class Solution:
    def generateParentheses(self, n):
        level = [""]
        for _ in range(2 * n):
            next_level = []
            for text in level:
                opens = text.count("("); closes = len(text) - opens
                if opens < n: next_level.append(text + "(")
                if closes < opens: next_level.append(text + ")")
            level = next_level
        return sorted(level)
