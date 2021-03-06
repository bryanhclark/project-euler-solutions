/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

const evenFib = (maxNum) => {
  let array = []
  const fibNums = (first = 1, last = 0) => {
    const newNum = first + last
    if (newNum % 2 === 0) array.push(newNum)
    if (newNum < maxNum) fibNums(newNum, first)
  }
  fibNums()
  return array.reduce((a, b) => {
    return a + b
  })
}




console.log(evenFib(4000000))