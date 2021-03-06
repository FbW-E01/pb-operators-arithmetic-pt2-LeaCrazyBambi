// Basic Arithmetic Problems
// Q1
const totalAmount = 6450;
const ticketCost = 15;

const ticketAmount = totalAmount / ticketCost;
console.log("€ " + ticketAmount);


// Q2
const incomeWeek = 500;
const weeksYear = 52;
const incomeYear = incomeWeek * weeksYear;
console.log("€ " + incomeYear);

// Percentage
// Q3
const wholeNumber = 30;
const partlyNumber = 17;
const percentage = partlyNumber * 100 / wholeNumber;
console.log(percentage + " %");

// Geometry Formulas
// Q4
const sizeSquare = 4.75;
const perimeterSquare = 4 * sizeSquare;
console.log(perimeterSquare);

// Q5
const sizeTriangle = 5 + 6 + 7;
console.log(sizeTriangle);

// Q6
console.log(5*5);

// Q 7
//Heron's Formula
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - triSideLength1) * (halfPerimeter - triSideLength2) * (halfPerimeter - triSideLength3));
console.log(`Area of triangle = ${areaTriangle}cm²`);

// Q 8
console.log( 9 * 9 * 9);

// Consumer Formula
//  Q 9
const billOne = 22.35;
const billOneTips = (10 * billOne) / 100;
const totalAmountBillOne = billOne + billOneTips;
console.log("€ " + totalAmountBillOne);

const billTwo = 26.67;
const billTwoTips = (15 * billTwo) / 100;
const totalAmountBillTwo = billTwo + billTwoTips;
console.log("€ " + totalAmountBillTwo);

const billThree = 35.92;
const billThreeTips = (20 * billThree) / 100;
const totalAmountBillThree = billThree + billThreeTips;
console.log("€ " + totalAmountBillThree);

const totalAmountBills = totalAmountBillOne + totalAmountBillTwo + totalAmountBillThree;
console.log("€ " + totalAmountBills);

// Average
// Q 10
const averageHours = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log("Noemy has an average of " + averageHours + " hours");

// Q 11
const firstFiveResults = 75 + 70 + 85 + 90 + 100;
const totalResults = 85 * 6;
const sixthResult = totalResults - firstFiveResults;
console.log("Score in the sixth test: " + sixthResult);


// Q 12 
const avgOfEightTests = 78 * 8;
const avgNeeded = 80 * 9;
const minResult = avgNeeded - avgOfEightTests;
console.log(`James needs a minimum of ${minResult}% to get an 80% average.`);