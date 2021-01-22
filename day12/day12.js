

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor (firstName, lastName, id, scores) {
        super(firstName, lastName, id)
        this.scores = scores
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        this.scores
        let media
        let sum = 0
        for (let i in this.scores) {
            sum += this.scores[i]
            media = sum/this.scores.length
        }
        
        switch (true) {
            case media >= 90 && media <= 100:
                return 'O'
                break
            case media >= 80 && media < 90:
                return 'E'
                break
            case media >= 70 && media < 80:
                return 'A'
                break
            case media >= 55 && media < 70:
                return 'P'
                break
            case media >= 40 && media < 55:
                return 'D'
                break
            case media < 40:
                return 'T'
                break
        }        
    }
}

