class Solution:
    def countQueenArrangements(self, n):
        mask = (1 << n) - 1
        available = [0] * n
        columns = [0] * n
        left_diag = [0] * n
        right_diag = [0] * n
        available[0] = mask
        row = count = 0
        while row >= 0:
            if available[row] == 0:
                row -= 1
                continue
            bit = available[row] & -available[row]
            available[row] -= bit
            next_columns = columns[row] | bit
            next_left = ((left_diag[row] | bit) << 1) & mask
            next_right = (right_diag[row] | bit) >> 1
            if row == n - 1:
                count += 1
            else:
                row += 1
                columns[row] = next_columns
                left_diag[row] = next_left
                right_diag[row] = next_right
                available[row] = mask & ~(next_columns | next_left | next_right)
        return count
