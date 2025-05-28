/* Write your code below. Good luck! 🙂 */
//TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

let massMark =78;
let heightMark=1.69;
let massJohn =92;
let heightJohn=1.95;

let BMIMark = massMark/(heightMark*heightMark); 
//we can use also the formula massMark/heightMark**2 it means hieghtMark to the power of 2
console.log(BMIMark);

let BMIJohn=massJohn/(heightJohn*heightJohn);
console.log(BMIJohn);

markHigherBMI = BMIMark>BMIJohn;
console.log(markHigherBMI);

//TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

massMark =95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark/(heightMark*heightMark);
console.log(BMIMark);
BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIJohn);

markHigherBMI= BMIMark>BMIJohn;
console.log(markHigherBMI);