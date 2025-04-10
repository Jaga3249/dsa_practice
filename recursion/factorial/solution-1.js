class Solution {
  PrintFactorial(i, res) {
    if (i < 1) {
      console.log(res);
      return;
    }
    this.PrintFactorial(i - 1, res * i);
  }
}
let n = 5;
let res = 1;
let sol = new Solution();
let result = sol.PrintFactorial(n, res);
console.log(result);
