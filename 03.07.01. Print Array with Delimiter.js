/ 1. Print an Array with a Given Delimiter
// The input comes as an array of strings. The last element of the array is the delimiter.
// The output is the same array, printed on the console, each element separated from the others by the
// given delimiter.
function main(arrOfStrings) {
    printArrWithDelimiter(arrOfStrings);
}
function printArrWithDelimiter(arrOfStrings) {
    let delimiter = arrOfStrings.pop();
    console.log(arrOfStrings.join(delimiter));
}
main(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);
main([
    'How about no ? ',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'
]);
// Examples
// Input                                       Output
// ['One',                                One-Two-ThreeFour-Five
// 'Two',
// 'Three',
// 'Four',
// 'Five',
// '-']
// ['How about                             How about
// no?',                                   no?_I_will_not_do_it!
// 'I',
// 'will',
// 'not',
// 'do',
// 'it!',
// '_']