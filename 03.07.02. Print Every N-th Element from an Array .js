// 2. Print Every N-th Element from an Array
// The input comes as an array of strings. The last element is N - the step.
// The output is every element on the N-th step starting from the first one. If the step is "3", you need to
// print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. Each element must be
// printed on a new line.
function main(arrOfStrings) {
    printEveryNthElement(arrOfStrings);
}
function printEveryNthElement(arrOfStrings) {
    let n = +(arrOfStrings.pop());
    for (i = 0; i < arrOfStrings.length; i += n) { //looping through every nth element in arrOfStrings
        nthElementsArr = arrOfStrings[i];
        console.log(nthElementsArr);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Another way to solve same question
function main(input) {
    let step = Number(input.pop());
    input.filter((element, index) => index % step == 0).forEach(element => console.log(element));
}
main(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);
main(['dsa',
    'asd',
    'test',
    'tset',
    '2'
]);
main(['1',
    '2',
    '3',
    '4',
    '5',
    '6'
]);
// Hints
//  Use what you’ve seen from the previous problem to extract the last element of the array.
//  Create a step variable to hold the given step of the array. Then print all the elements with a for
// loop, incrementing the loop variable with the value of the step variable.
// Example
// Input
// ['5',
// '20',
// '31',
// '4',
// '20',
// '2']
// Output
// 5
// 31
// 20
// Input
// ['dsa',
// 'asd',
// 'test',
// 'tset',
// '2']
// Output
// dsa
// test
// Input
// ['1',
// '2',
// '3',
// '4',
// '5',
// '6']
// Output
// 1