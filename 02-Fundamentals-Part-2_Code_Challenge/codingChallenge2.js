// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// TEST DATA: 125, 555, and 44.


const calcTip = function(bill){
    const tip = bill>=50 && bill<=300 ? (15/100)*bill : (20/100)*bill ;
    return tip;
}
console.log(calcTip(100));

// 2. And now let's use arrays! So, create an array called bills containing the test data below.

const bills = [125,555,44];

// 3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(bills,tips)

// 4. BONUS: Create an array totals containing the total values, so the bill + tip.

const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(totals);
