function processData(input) {
    const S = input.split('\n')


for (let i = 1; i <= S[0]; i++) {
    let even = []
    let odd = []
    for (let j in S[i]) {

        if (j % 2 == 0) {
            even.push(S[i][j])
        } else {
            odd.push(S[i][j])
        }
    }
    console.log(`${even.join('')} ${odd.join('')}`)
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
