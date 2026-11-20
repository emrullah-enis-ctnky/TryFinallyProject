class Solution { public int integerSquareRoot(int n) { long l=0,r=n;while(l<=r){long m=(l+r)/2;if(m*m<=n)l=m+1;else r=m-1;}return (int)r; } }
