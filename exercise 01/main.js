// 1. Use conditions to check if a given number is even. If so , print with
// console.log “ The Number (TheNumberYouWrote) is even ". If the
// number is not even, print " The Number (TheNumberYouWrote) is not
// even"



const myPrompt = prompt('Please type in a random number, and I will tell you if it is even or not');

if (myPrompt % 2 === 0) {
    console.log('The number ' + myPrompt + ' is even');
}
else {
    console.log('The number ' + myPrompt + ' is odd');
}