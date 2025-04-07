class Solution {
  reverseNumber(n) {
    let rev = 0;
    while (n > 0) {
      let ld = n % 10;
      rev = rev * 10 + ld;
      n = Math.floor(n / 10);
    }
    return rev;
  }
}
let n = 12345;
/* Creating an instance of
        Solution class */
let sol = new Solution();

let result = sol.reverseNumber(n);
console.log(result);
