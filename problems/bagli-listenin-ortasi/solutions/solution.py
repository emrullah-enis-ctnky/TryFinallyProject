class Solution:
    def middleListIndex(self, values, next, head):
        slow = fast = head
        while fast != -1 and next[fast] != -1:
            slow = next[slow]
            fast = next[next[fast]]
        return slow
