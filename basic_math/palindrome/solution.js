class Solution {
  CheckPalindrome(n) {
    // 121-121(same weither you read left or right)
    let temp = n;
    let rev = 0;
    while (temp > 0) {
      let ld = temp % 10;
      rev = rev * 10 + ld;
      temp = Math.floor(temp / 10);
    }
    return rev === n;
  }
}
let n = 1341;
/* Creating an instance of
        Solution class */
let sol = new Solution();

let result = sol.CheckPalindrome(n);
console.log(result);
