class Solution:
    def kthSmallestBst(self, nodes, k):
        stack = []
        index = 0
        while index < len(nodes) or stack:
            while index < len(nodes) and nodes[index] != -1:
                stack.append(index)
                index = 2 * index + 1
            index = stack.pop()
            k -= 1
            if k == 0:
                return nodes[index]
            index = 2 * index + 2
        return -1
