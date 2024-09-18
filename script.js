'use strict'
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let out = (arr.reduce((sum, e) => (sum + (e)), 0)) / arr.length;
console.log(`Average of arr = ${out}`);
// ///////////////////////
const array = []
const PerfectNumbers = (num) => {
    let sum = 0
    if (num > 1) {
        for (let i = 0; i < num; i++) {
            if (num % i === 0)
                sum += i
        }
        if (num === sum)
            array.push(num)
    }
    return
}
PerfectNumbers(23)
PerfectNumbers(6)
PerfectNumbers(24)
PerfectNumbers(61)
PerfectNumbers(28)
console.log(array);
