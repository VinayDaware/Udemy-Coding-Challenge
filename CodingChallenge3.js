// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let scoreDolphins = (96+108+89)/3;
let scoreKolas = (88+91+110)/3;

console.log("Dolphins avg score "+scoreDolphins);
console.log("Koalas avg score "+scoreKolas);

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

if(scoreDolphins>scoreKolas){
    console.log("Dolphins win the trophy 🏆");
}else if (scoreDolphins<scoreKolas){
    console.log("Koalas win the trophy 🏆");
} else if(scoreDolphins===scoreKolas){
    console.log("Both win the trophy")
}

//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
scoreDolphins = (97+112+101)/3;
scoreKolas = (109+95+123)/3;
const minScore = 100;

console.log("Dolphins avg score "+scoreDolphins);
console.log("Koalas avg score "+scoreKolas);

// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 
if(scoreDolphins>scoreKolas && scoreDolphins >= minScore){
    console.log("Dolphins win the trophy 🏆");
}else if (scoreDolphins<scoreKolas && scoreKolas>=minScore){
    console.log("Koalas win the trophy 🏆");
}

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
// Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

scoreDolphins = (97+112+101)/3;
scoreKolas = (109+95+106)/3;

console.log("Dolphins avg score "+scoreDolphins);
console.log("Koalas avg score "+scoreKolas);

if(scoreDolphins === scoreKolas){
    console.log("Game is draw due to equal scores");
}else if(minScore>=scoreDolphins && minScore>=scoreKolas){
    console.log("Game is draw due minimum criteria does not matched");
}else{
    console.log("No one wins the trophy 😢")
}