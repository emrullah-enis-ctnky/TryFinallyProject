class Solution:
    def hasListCycle(self, next, head):
        slow = fast = head
        while fast != -1 and next[fast] != -1:
            slow = next[slow]
            fast = next[next[fast]]
            if slow == fast:
                return True
        return False
