// Write a function getGrade(score) that: 
//      Take a student's mark (0 to 100)
//      Returns the grade based on this grading scale:
// 90 -100 => 'A+'
// 80 - 89 => 'A'
// 70 - 79 => 'B'
// 60 - 69 => 'C'
// 50 - 59 => 'D'
// 40 - 49 => 'E'
// 0 - 39 => 'F'


// function getGrade(score){
//     if(score >=90 && score <=100) return "A+";
//     if (score >=80 && score <=89) return "A";
//     if (score >=70 && score <=79) return "B";
//     if (score >=60 && score <=69) return "C";
//     if (score >=50 && score <=59) return "D";
//     if (score >=40 && score <=49) return "E";
//     if (score >=0 && score <=39) return "Fail";
//     return "invalid marks";
// }

// console.log(getGrade("15"));


//Rock Paper Scissor Logic

function rps(user, computer) {
    if(user === computer) return "tie";

    if(user === "rock" && computer === "scissor") return "user";
    if(user ==="scissor" && computer === "rock") return "user";
    if(user === "paper" && computer === "rock") return "user";
    return "computer";
}

console.log(rps("rock", "scissor"));