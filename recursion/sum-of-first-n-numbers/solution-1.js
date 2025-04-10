class Solution {
  PrintSum(i, sum) {
    if (i < 1) {
      console.log(sum);
      return;
    }
    this.PrintSum(i - 1, sum + i);
  }
}
let n = 5;
let sum = 0;
let sol = new Solution();
let result = sol.PrintSum(n, sum);
console.log(result);
