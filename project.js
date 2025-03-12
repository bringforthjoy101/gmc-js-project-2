// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Functions

// Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

// Mathematical Functions

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq.slice(0, n);
}



console.log({
    reverseString: reverseString('Emmanuel'),
    countCharacters: countCharacters('Emmanuel'),
    capitalizeWords: capitalizeWords('emmanuel'),
    findMax: findMax([1,2,3,4,5]),
    findMin: findMax([1,2,3,4,5]),
    sumArray: sumArray([1,2,3,4,5]),
    filterArray: filterArray([1,2,3,4,5], (x)=>x>2),
    factorial: factorial(20),
    isPrime: isPrime(20),
    fibonacci: fibonacci(20)
})
    

