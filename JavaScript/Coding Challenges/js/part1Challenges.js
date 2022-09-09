// Coding Challenge #1
/*
Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
BMI=mass/height**2 or BMI=mass/(height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78kg and is 1.69m tall. John weights 92kg and 1.95m tall.
TEST DATA 2: Marks weights 95kg and 1.88m tall. John weights 85kg and is 1.76m tall.
*/
const markMass = 78, markHeight = 1.69;
const johnMass = 92, johnHeight = 1.95;

const markBMI = markMass / markHeight**2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

document.getElementById('markBMI').innerText = markBMI;
document.getElementById('johnBMI').innerText = johnBMI;

//Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher that John's!" or "John's BMI is higher that Mark's"
2. Use a template literal to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/ 
console.log('🟩🗣🗣 Challenge #2 Result! 🌟');

if (markHigherBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
    document.getElementById('challenge1Res').style.display = 'block';
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}

//Coding Challenge #3
/*
There are two gymnastic teams, Dolphins and Koalas.
They are competing agains each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average scrore).
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
*/
const dolphinsScore1 = 97, dolphinsScore2 = 112, dolphinsScore3 = 101;
const koalasScore1 = 109, koalasScore2 = 95, koalasScore3 = 106;
const minScore = 100;

const dolphinsAverage = Number((dolphinsScore1+dolphinsScore2+dolphinsScore3)/3);
const koalasAverage = Number((koalasScore1+koalasScore2+koalasScore3)/3);

console.log('🟩🗣🗣 Challenge #3 Result! 🌟');
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage) console.log('Dolphins wins!');
else if (dolphinsAverage === koalasAverage) console.log(`It's a draw!`);
else console.log('Koalas wins!');

if (dolphinsAverage === koalasAverage && koalasAverage >= minScore) console.log("Bonus 2: It's a draw! Both team wins a trophy!")
else if(dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) console.log('Bonus 1: Dolphins wins the trophy! 🏆');
else if(koalasAverage > dolphinsAverage && koalasAverage >= minScore) console.log('Bonus 1: Koalas wins the trophy! 🏆');
else console.log('Bonus 1: No Team wins!  🥺');

// Switch to if-else

const day = 'monday';
switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log ('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default: console.log('Not a valid day!');
}
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} 
else if (day === 'tuesday') console.log('Prepare theory videos');
else if (day === 'wednesday' || day === 'thursday') console.log ('write code examples');
else if (day === 'friday') console.log('Record videos');
else if (day === 'saturday' || day === 'sunday') console.log('Enjoy the weekend :D');
else console.log('Not a valid day!');

//Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement
3. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

Test Data: Test for bill values 275, 40 and 430
*/
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 15 : 20;
const totTip = bill * (tip / 100);
const totVal = bill + totTip;

console.log(`The bill was ${bill}, the tip was ${totTip}, and the total value was ${totVal}`)