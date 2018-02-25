/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestThreeDigitPalindromicNumber() {
// start by checking with the largest 3 digit numbers and going down

}



// check if palindrome helper function
function isPalindrome(num) {
  let numString = String(num).split('').join('')
  let reverse = String(num).split('').reverse().join('')

return numString === reverse

}

