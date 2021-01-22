let A = [1, 2, 3, 4]

let difference = 0
let maximumDifference = 0
for (i in A) {
    for (j in A) {
        difference += Math.abs(A[i] - A[j])

        if(difference >= maximumDifference) {
            maximumDifference = difference
        }
        
        difference = 0
    }
}

console.log(maximumDifference)
