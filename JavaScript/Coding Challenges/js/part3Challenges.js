'use strict';

// Problem 1
/* 
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitude = calcTempAltitude(temperatures);
console.log(amplitude);

// Problem 2
//Function should now receive two arrays of temps

const calcTempAltitudeNew = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcTempAltitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Challenge 1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 17°C in 1 days ... 21°C in 2 days ...23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log('---- Challenge 1 ----');
const printForecast = function (arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string = string + ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('... ' + string);
};
printForecast(data1);
printForecast(data2);

const sum = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
  return total;
  // return the sum of all arguments given.
};
sum([3, 2, 3]);
