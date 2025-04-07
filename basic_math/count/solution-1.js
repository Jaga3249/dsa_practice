class Solution {
  countDigit(n) {
    let count = 0;
    if (n === 0) {
      count = 1;
    }
    while (n > 0) {
      n = Math.floor(n / 10);
      count += 1;
    }
    return count;
  }
}
let n = 0;
/* Creating an instance of
      Solution class */
let sol = new Solution();

let result = sol.countDigit(n);
console.log(result);
