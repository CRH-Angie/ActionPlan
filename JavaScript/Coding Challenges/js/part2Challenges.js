// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameter ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time.

Test Data 1: Dolphins score 44, 23, and 71. Koalas score 65, 54 and 49
Test Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return console.log(`Dolphin wins! (${avgDolphins} vs. ${avgKoalas})`);
    } else if ( avgKoalas > avgDolphins ** 2){
        return console.log(`Koalas wins! (${avgKoalas} vs. ${avgDolphins})`);
    } else return console.log('NO Team Wins 🥺');
}
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

// Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: tip 15% of the bill if the bill value is between 50 and 300, and if the balue is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

Test Data: 125, 555 and 44
*/
const bills = [125, 525, 44];

const calcTip = function (anyVal) {
    return anyVal>= 50 && anyVal<=300 ? anyVal * 0.15 : anyVal * 0.20;
}
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total)

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

const jonas = {
    firstName:'Jonas',
    lastName: 'Schmedtmann',
    birthyear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    checkAge: function() {
        this.age = 2037 - this.birthyear;
        return this.age;
    },
    summary: function() {
        return `${this.firstName} is a ${this.checkAge(jonas.birthyear)}-year old teacher, and he has ${this.hasDriversLicense ? 'a':'no'} driver's license`
    }
}
// jonas.checkAge(jonas.birthyear)
// console.log(jonas['checkAge'](jonas.birthyear));
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.summary());

// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass/height **2 or BMI = mass /(height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass and height(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI  value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI(28.3) is higher than Mark Miller's (23.9)!"

Test Data: Marks weighs 78kg and is 1.69m tall. John weighs 92kg and is 1.95m tall.
*/

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi;
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi;
    }
}
console.log(`${mark.calcBMI() > john.calcBMI() ? (mark.firstName +" "+ mark.lastName) : (john.firstName +" "+ john.lastName)}'s BMI (${mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()}) is higher than ${mark.calcBMI() > john.calcBMI() ? (john.firstName +" "+ john.lastName): (mark.firstName +" "+ mark.lastName)}'s BMI (${mark.calcBMI() > john.calcBMI() ? john.calcBMI() : mark.calcBMI()})!`)

// Coding Challenge #4
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill+tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test Data: 22, 295,176, 440,37, 105, 10, 1100, 86, 52

Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! 
*/
const bills2 = [22, 295,176, 440,37, 105, 10, 1100, 86, 52];
const tips2 = [], totals2 = [];

const calcTip2 = function (anyVal) {
    return anyVal>= 50 && anyVal<=300 ? anyVal * 0.15 : anyVal * 0.20;
}
for (let i = 0; i < bills2.length; i++) {
    const tip = calcTip2(bills2[i])
    tips2.push(tip);
    totals2.push(tip + bills2[i]);
}
console.log(tips2, totals2)

const calcAverage2 = function (arr) {
    let sum = 0;
    for(i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage2(totals2))