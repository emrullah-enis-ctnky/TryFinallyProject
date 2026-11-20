class Solution:
    def reverseQueuePrefix(self, items, k):
        return list(reversed(items[:k])) + items[k:]
