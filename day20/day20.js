process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    // Write Your Code Here

    let totalNumOfSwaps = 0

    for (i = 0; i < n; i++) {
        let numOfSwaps = 0

        for (j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                let valorAntigo = a[j]
                a[j] = a[j + 1];
                a[j + 1] = valorAntigo;

                numOfSwaps++
            }
        }

        totalNumOfSwaps += numOfSwaps

        if (numOfSwaps == 0) {
            break;
        }
    }
    
    console.log(`Array is sorted in ${totalNumOfSwaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)

}