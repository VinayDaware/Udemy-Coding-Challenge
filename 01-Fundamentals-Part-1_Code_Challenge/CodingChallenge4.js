
// Bill Value 275

let bill = 275;

// let tip;
// if(bill>=50 && bill<=300){
//     tip = (15/100)*bill;
// }else{
//     tip = (20/100)*bill;
// }
// const totalPayable = bill + tip ;
// console.log("The bill was "+bill+", the tip was "+tip+", the total value "+totalPayable);
let tip = bill>=50 && bill<=300 ? (15/100)*bill : (20/100)*bill ;
let finalValue = bill+tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);


// Bill Value 40
bill = 40;
tip = bill>=50 && bill <=300 ? (15/100)*bill : (20/100)*bill;
finalValue = bill +tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);

// Bill Value 430
bill = 430;
tip = bill>=50 && bill<=300 ? (15/100)*bill : (20/100)*bill;
finalValue = bill + tip ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`);



