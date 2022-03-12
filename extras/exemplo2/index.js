/* defines a numbers dataset */
const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19
];

/* predicate checking whether number 
    is an even number, or not */
const isEven = (number) => {

    /* is divisible by 2 */
    return number % 2 === 0;

};

/* predicate checking whether number 
    is an odd number, or not */
const isOdd = (number) => {

    /* is not even number, not divisible by 2 */
    return !isEven(number);

};

/* searches for even numbers */
const evenNumbers = numbers.filter(isEven);

/* searches for odd numbers */
const oddNumbers = numbers.filter(isOdd);

if(evenNumbers.length > 0) {

    console.log(`Even numbers found in the numbers dataset are ${evenNumbers}`);

} else {

    console.log("No even numbers found in the dataset.");

}

if(oddNumbers.length > 0) {

    console.log(`Odd numbers found in the numbers dataset are ${oddNumbers}`);

} else {

    console.log("No odd numbers found in the dataset.");

}