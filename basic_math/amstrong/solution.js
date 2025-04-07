class Solution {
  CheckAmstrong(n) {
    //121=13 + 23 + 3 3
    let temp = n;
    let noOfDigits = this.countDigit(temp);
    let res = 0;
    while (temp > 0) {
      let ld = temp % 10;
      res += Math.pow(ld, noOfDigits);
      temp = Math.floor(temp / 10);
    }

    return n === res;
  }
  countDigit(digit) {
    let count = 0;
    let temp = digit;
    while (temp > 0) {
      temp = Math.floor(temp / 10);
      count += 1;
    }
    return count;
  }
}
let n = 153;
/* Creating an instance of
          Solution class */
let sol = new Solution();

let result = sol.CheckAmstrong(n);
console.log(result);
