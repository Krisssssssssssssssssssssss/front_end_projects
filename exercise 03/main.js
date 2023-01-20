// 3. From the given 3 numbers , find the smallest and largest, and check
// are they prime.
// Example:
// Number = 13;
// Number2 = 15;
// Number3 = 20;
// Smallest - 13 , Largest-20
// The smallest number 13 is prime , The largest number 20 is not prime.


const myPrompt1 = +prompt('Please type in any numbers');
const myPrompt2 = +prompt('Please type in any numbers');
const myPrompt3 = +prompt('Please type in any numbers');
let highestNumber = Math.max(myPrompt1, myPrompt2, myPrompt3);
let lowestNumber = Math.min(myPrompt1, myPrompt2, myPrompt3);

let isPrimeHigh = true;

if (highestNumber == 1){
    isPrimeHigh =  false;
}
else if (highestNumber > 1) {
    for (i = 2; i < highestNumber; i++) {
        if (highestNumber % i === 0) {
            isPrimeHigh = false;
        }
    }
}
let isPrimeLow = true;

if (lowestNumber == 1){
    isPrimeLow =  false;
}
else if (lowestNumber > 1) {
    for (i = 2; i < lowestNumber; i++) {
        if (lowestNumber % i === 0) {
            isPrimeLow = false;
        }
    }
}



if (isPrimeHigh) {
    isPrimeHigh = 'prime.'
}
else {
    isPrimeHigh = 'not prime.'
}

if (isPrimeLow) {
    isPrimeLow = 'prime.'
}
else {
    isPrimeLow = 'not prime.'
}


console.log('The highest number is ' + highestNumber + ' and is ' + isPrimeHigh + ' And the lowest one is ' + lowestNumber + ' and is ' + isPrimeLow)