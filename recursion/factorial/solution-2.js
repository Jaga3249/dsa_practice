class Solution {
  PrintFactorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * this.PrintFactorial(n - 1);
  }
}
let n = 5;
let res = 1;
let sol = new Solution();
let result = sol.PrintFactorial(n);
console.log(result);
