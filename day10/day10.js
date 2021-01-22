'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let n = parseInt(readLine(), 10);
    let remainder = ''
    while (n > 0) {
        remainder += `${n % 2}`
        n = Math.trunc(n / 2)
    }
    let count = 0
    let countMax = 0
    for (let i in remainder) {
        if (remainder[i] == '1') {
            count += 1
        } else {
            if (count > countMax) {
                countMax = count
            }
            count = 0
        }
    }

    if (count > countMax) {
        countMax = count
    }
console.log(countMax)
}
