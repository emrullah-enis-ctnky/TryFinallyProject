class Solution:
    def replaceWithShortestRoots(self, roots, sentence):
        children = [[-1] * 26]
        terminal = [False]
        for root in roots:
            node = 0
            for letter in root:
                index = ord(letter) - 97
                if children[node][index] == -1:
                    children[node][index] = len(children)
                    children.append([-1] * 26)
                    terminal.append(False)
                node = children[node][index]
            terminal[node] = True
        result = []
        for word in sentence.split():
            node = 0
            length = 0
            matched = 0
            for letter in word:
                next_node = children[node][ord(letter) - 97]
                if next_node == -1:
                    break
                node = next_node
                length += 1
                if terminal[node]:
                    matched = length
                    break
            result.append(word[:matched] if matched else word)
        return " ".join(result)
