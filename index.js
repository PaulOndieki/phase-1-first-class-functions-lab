// Code your solution in this file!
// code that returns first 2 drivers as an array
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2); // returns the first two items of the array. the starting index and index before which to stop.
};

// code that returns last 2 drivers as an array
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = function(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
};

// test
const alldrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(alldrivers)) ;
console.log(returnLastTwoDrivers(alldrivers)) ;
console.log(selectDifferentDrivers(alldrivers, returnFirstTwoDrivers)); 
// Output: ['Antonia', 'Nuru']

console.log(selectDifferentDrivers(alldrivers, returnLastTwoDrivers));  
// Output: ['Amari', 'Mo']


//fare multiplier
const createFareMultiplier = function(multiplier){
    return function(fare) {
        return fare * multiplier;
    };
};
const fareQuadrupler = createFareMultiplier(4);
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

console.log(fareQuadrupler(9)); //36
console.log(fareDoubler(55)); //110
console.log(fareTripler(33)); //99