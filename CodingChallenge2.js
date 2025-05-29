let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark/(heightMark**2);
let BMIJohn = massJohn/(heightJohn**2);

console.log(BMIMark);
console.log(BMIJohn);
let message;

if(BMIMark>BMIJohn){
    message = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
}else{
    message = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) `;
}
console.log(message);  

