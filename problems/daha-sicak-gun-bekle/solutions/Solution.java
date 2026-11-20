class Solution {
  public int[] daysUntilWarmer(int[] temperatures) {
    int[] answer = new int[temperatures.length], stack = new int[temperatures.length];
    int size = 0;
    for (int day = 0; day < temperatures.length; day++) {
      while (size > 0 && temperatures[day] > temperatures[stack[size - 1]]) {
        int previous = stack[--size];
        answer[previous] = day - previous;
      }
      stack[size++] = day;
    }
    return answer;
  }
}
