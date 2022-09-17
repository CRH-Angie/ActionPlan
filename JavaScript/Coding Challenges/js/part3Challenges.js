'use strict';

// Problem 1
/* 
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAltitude = function (temps) {
  let maxVal = temps[0],
    minVal = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > maxVal) {
      maxVal = curTemp;
    }
    if (curTemp < minVal) {
      minVal = curTemp;
    }
  }
  return maxVal - minVal;
};
console.log(calcTempAltitude(temperatures));
