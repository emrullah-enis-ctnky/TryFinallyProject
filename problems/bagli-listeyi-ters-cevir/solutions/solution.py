class Solution:
    def reverseListValues(self, values, next, head):
        result = []
        node = head
        while node != -1:
            result.append(values[node])
            node = next[node]
        return result[::-1]
