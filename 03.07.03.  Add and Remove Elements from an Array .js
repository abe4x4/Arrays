// 3. Add and Remove Elements from an Array
// Write a JS function that adds and removes numbers to / from an array. You will receive a command which
// can either be "add" or "remove".
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array.
// Upon receiving the "remove" command you should remove the last entered number, currently existent in
// the array.
// The input comes as an array of strings. Each element holds a command.
// The output is the array itself, with each element printed on a new line. In case of an empty array, just print
// "Empty".
function main(input) {
    let result = [];
    let number = 1;
    for (let command of input) {
        if (command == "add") {
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    }
    if (result.length == 0) {
        console.log("Empty");
    } else {
        result.forEach(element => console.log(element));
    }
}
main(['add',
    'add',
    'add',
    'add'
]);
main(['add',
    'add',
    'remove',
    'add',
    'add'
]);
main(['remove',
    'remove',
    'remove'
]);
// Examples
// Input
// ['add',
// 'add',
// 'add',
// 'add']
// Output
// 1
// 2
// 3
// 4
// Input
// ['add',
// 'add',
// 'remove',
// 'add',
// 'add']
// Output
// 1
// 4
// 5
// Input
// ['remove',
// 'remove',
// 'remove']
// Output
// Empty
8:29
4. Rotate Array
// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the
// last element should become the first, upon rotation.
// The input comes as an array of strings. The last element of the array is the number of rotations you need
// to make.
// The output is the resultant array after the rotations. The elements should be printed on one line,
// separated by a single space.
function main(arrOfStrings) {
    rotateElementsInArray(arrOfStrings);
}
function rotateElementsInArray(arrOfStrings) {
    let rotationNum = arrOfStrings.pop();
    let i = 0;
    while (i < rotationNum) {
        arrOfStrings.unshift(arrOfStrings.pop());
        i++;
    }
    console.log(arrOfStrings.join(' '));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Another way to solve same question
function solve(arr) {
    let rotations = +arr[arr.length - 1];
    arr.pop()
    if (isNaN(rotations)) {
        console.log('Empty');
    } else {
        for (let i = 1; i <= rotations; i++) {
            arr.unshift(arr.pop());
        }
        console.log(arr.join(' '))
    }
}
main(['1',
    '2', '3',
    '4',
    '2'
]);
main(['Banana',
    'Orange', 'Coconut',
    'Apple',
    '15'
]);
// Hints
//  Check if there is a built-in function for inserting elements at the start of the array.
// Examples
// Input               Output
// ['1',               3 4 1 2
// '2',
// '3',
// '4',
// '2']
// ['Banana',          Orange Coconut Apple
// 'Orange',           Banana
// 'Coconut',
// 'Apple',
// '15']
// 5. Extract Increasing Subsequence from an Array
// Write a function that extracts only those numbers that form a non-decreasing subsequence. In other
// words, you start from the first element and continue to the end of the given array of numbers. Any
// number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the
// current biggest one you set it as the current biggest one and you continue to the next number.
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subsequence.
// Each element should be printed on a new line.
function main(numArr) {
    numArr = numArr.map(Number);
    let result = [];
    let biggest = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] >= biggest) {
            result.push(numArr[i]);
            biggest = numArr[i];
        }
    }
    console.log(result.join('\n'));
}
main([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
main([1,
    2,
    3,
    4
]);
main([20,
    3,
    2,
    15,
    6,
    1
]);
// Hints
//  The Array.reduce() built-in function might help you a lot with this problem.
// Examples
//   Input
//    [1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24]
// Output
// 1
// 3
// 8
// 10
// 12
// 24
// Input
// [1,
// 2,
// 3,
// 4]
// Output
// 1
// 2
// 3
// 4
//   Input
//    [20,
//     3,
//     2,
//     15,
//     6,
//     1]
// Output
// 20