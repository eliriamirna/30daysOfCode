function main() {
    let S = parseInt('*')
    
    try {
        if (isNaN(S)|| typeof S === 'undefined') throw 'Bad String'
        console.log(S)
    } catch(erro) {
        console.log(erro)
    }
}

main()