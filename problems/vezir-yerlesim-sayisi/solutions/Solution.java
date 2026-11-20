class Solution {
  public int countQueenArrangements(int n) {
    int mask = (1 << n) - 1;
    int[] available = new int[14], columns = new int[14], leftDiag = new int[14], rightDiag = new int[14];
    available[0] = mask;
    int row = 0, count = 0;
    while (row >= 0) {
      if (available[row] == 0) { row--; continue; }
      int bit = available[row] & -available[row];
      available[row] -= bit;
      int nextColumns = columns[row] | bit;
      int nextLeft = ((leftDiag[row] | bit) << 1) & mask;
      int nextRight = (rightDiag[row] | bit) >> 1;
      if (row == n - 1) count++;
      else {
        row++;
        columns[row] = nextColumns;
        leftDiag[row] = nextLeft;
        rightDiag[row] = nextRight;
        available[row] = mask & ~(nextColumns | nextLeft | nextRight);
      }
    }
    return count;
  }
}
