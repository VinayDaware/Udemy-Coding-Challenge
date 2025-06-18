// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
//Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).


//1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// 2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// 3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// 4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// 5. Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

let calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;


// test data  1
let scoreDolphins = calcAverage (44,23,71);
console.log (`The average scores of team Dolphins - ${scoreDolphins}`);


let scoreKoalas = calcAverage (65,54,49);
console.log (`The average scores of team Koalas - ${scoreKoalas}`);

// 3. Function to check winner

function checkWinner (avgDolphins , avgKoalas){
    if(avgDolphins >= 2*avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs  ${avgKoalas})`);
    }else if (avgKoalas>=2*avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }else {
        console.log("No team wins...");
    }

};
checkWinner (scoreDolphins,scoreKoalas);

// test data  2
scoreDolphins = calcAverage (85,54,41);
console.log (`The average scores of team Dolphins - ${scoreDolphins}`);

scoreKoalas = calcAverage (23,34,27);
console.log (`The average scores of team Koalas - ${scoreKoalas}`);
checkWinner (scoreDolphins,scoreKoalas);


