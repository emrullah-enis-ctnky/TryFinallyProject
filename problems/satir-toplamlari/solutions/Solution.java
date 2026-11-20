class Solution { public int[] rowSums(int[][] matrix) { int[] r=new int[matrix.length]; for(int i=0;i<matrix.length;i++) for(int x:matrix[i]) r[i]+=x; return r; } }
