function processData(input) {
    //Enter your code here
    input = input.split('\n')

let phoneBook = {}
for (let i = 1; i <= parseInt(input[0]); i++) {
    phoneBook[input[i].split(' ')[0]] = input[i].split(' ')[1]
}
for (let i = parseInt(input[0]) + 1; i <= input.length - 1; i++) {
    if (phoneBook[input[i]] === undefined) {
        console.log('Not found')
    } else {
        console.log(`${input[i]}=${phoneBook[input[i]]}`)
    }
}
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
