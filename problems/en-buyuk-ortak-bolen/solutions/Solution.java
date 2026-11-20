class Solution { public int greatestCommonDivisor(int a, int b) { return b==0?a:greatestCommonDivisor(b,a%b); } }
