// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
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
    message = `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`;
}else{
    message = `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}) `;
}
console.log(message);  

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
BMIMark = massMark/(heightMark**2);
BMIJohn = massJohn/(heightJohn**2);
console.log(BMIMark, BMIJohn);

if(BMIMark>BMIJohn){
    message = `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`
}else{
    message = `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}) `
}
console.log(message);