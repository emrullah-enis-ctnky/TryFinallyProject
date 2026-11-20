class Solution:
    def isValidBst(self, nodes):
        if not nodes or nodes[0] == -1:
            return True
        stack = [(0, float("-inf"), float("inf"))]
        while stack:
            index, low, high = stack.pop()
            value = nodes[index]
            if value == -1:
                continue
            if not low < value < high:
                return False
            left, right = 2 * index + 1, 2 * index + 2
            if right < len(nodes) and nodes[right] != -1:
                stack.append((right, value, high))
            if left < len(nodes) and nodes[left] != -1:
                stack.append((left, low, value))
        return True
