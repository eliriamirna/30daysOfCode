function main() {
    let S = parseInt('50')
    
    try {
        if (isNaN(S)|| typeof S === 'undefined') throw 'Bad String'
        console.log(S)
    } catch(erro) {
        console.log(erro)
    }
}

main()

//Other solution

function main() {
    const S = parseInt(readLine());
    try {
        S != Number(S) && err()
        console.log(Number(S))
    } 
    catch (err) {
        console.log('Bad String')
    }
    
}