class Solution:
    def allTaskOrders(self, tasks):
        values = sorted(tasks)
        result = []
        current = []
        used = [False] * len(values)

        def generate():
            if len(current) == len(values):
                result.append(current.copy())
                return
            for i, value in enumerate(values):
                if not used[i]:
                    used[i] = True
                    current.append(value)
                    generate()
                    current.pop()
                    used[i] = False

        generate()
        return result
