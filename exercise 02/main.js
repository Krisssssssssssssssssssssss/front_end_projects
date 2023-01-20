// 2. Check which numbers from 10 to 100 are even and divisible by 3. Print
// with console.log all those that meet these conditions.


let myNumbers;

for (i = 10; i < 100; i++) {
    myNumbers = i;
    if(i % 3 === 0 && i % 2 === 0){
        console.log(i);
    }
}

console.log(myNumbers);