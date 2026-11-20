class Solution:
    def maximumTreePathSum(self, nodes):
        empty = -2147483648
        if not nodes or nodes[0] == empty:
            return 0
        order = []
        stack = [0]
        while stack:
            index = stack.pop()
            order.append(index)
            left, right = 2 * index + 1, 2 * index + 2
            if left < len(nodes) and nodes[left] != empty:
                stack.append(left)
            if right < len(nodes) and nodes[right] != empty:
                stack.append(right)
        gain = [0] * len(nodes)
        best = -1000000000
        for index in reversed(order):
            left, right = 2 * index + 1, 2 * index + 2
            left_gain = max(0, gain[left]) if left < len(nodes) and nodes[left] != empty else 0
            right_gain = max(0, gain[right]) if right < len(nodes) and nodes[right] != empty else 0
            best = max(best, nodes[index] + left_gain + right_gain)
            gain[index] = nodes[index] + max(left_gain, right_gain)
        return best
