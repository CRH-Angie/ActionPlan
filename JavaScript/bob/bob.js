"use strict";

/*
Bob is a lackadaisical teenager. In conversation, his responses are very limited.
Bob answers 'Sure.' if you ask him a question.
He answers 'Whoa, chill out!' if you yell at him.
He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.
*/

function hey(command) {
  function hasNumber(myString) {
    return /\d/.test(myString);
  }
  let response;
  let lastText, sure, chillOut, capitalLetters;
  if (command) {
    lastText = command.length;
    sure = command.lastIndexOf("?", lastText) !== -1;
    chillOut = command.lastIndexOf("!", lastText) !== -1;
    capitalLetters = command.toUpperCase();
  }
  if (command === "" || command == undefined || command == "...") command = 3;
  if ((capitalLetters !== command && sure) || (hasNumber(command) && sure))
    command = 0;
  if (capitalLetters === command && !chillOut && !sure) command = 1;
  if (capitalLetters === command && chillOut) command = 1;
  if (capitalLetters === command && sure) command = 2;

  switch (command) {
    case 0:
      response = "Sure";
      break;
    case 1:
      response = "Whoa, chill out!";
      break;
    case 2:
      response = "Calm down, I know what I'm doing!";
      break;
    case 3:
      response = "Fine. Be that way!";
      break;
    default:
      response = "Whatever.";
  }
  return response;
}
//Whatever
console.log(hey("Tom-ay-to, tom-aaaah-to."));
console.log(hey("Let's go make out behind the gym!"));
console.log(hey("It's OK if you don't want to go to the DMV."));

//whoa, chill out
console.log(hey("WATCH OUT!"));
console.log(hey("FCECDFCAAB"));
console.log(hey("1, 2, 3 GO!"));
console.log(hey("ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!"));

//Sure
console.log(hey("Does this cryogenic chamber make me look fat?"));
console.log(hey("You are, what, like 15?"));
console.log(hey("fffbbcbeab?"));
console.log(hey("4?"));

//Calm down, I know what I'm doing!
console.log(hey("WHAT THE HELL WERE YOU THINKING?"));

//Fine. Be that way!
console.log(hey());
console.log(hey("..."));
console.log(hey(""));

// Whatever
// 1. ends with period
// 2. anything else
// 3. stating something
// 4. Talking forcefully (ends with !)
// 5. Using acronyms in regular speech (word formed by the initial letter or group of letters of words in a phrase)

// ((_) => {
//   console.log("Running hey...");
//   // Stating Something
//   console.log(hey("Tom-ay-to, tom-aaaah-to.") === "Whatever");
//   // Talking forcefully
//   console.log(hey("Let's go make out behind the gym!") === "Whatever.");
//   // Using acronyms in regular speech
//   console.log(
//     hey("It's OK if you don't want to go to the DMV.") === "Whatever."
//   );
//   // Shouting
//   console.log(hey("WATCH OUT!") === "Whoa, chill out!");
//   // Shouting Gibberish
//   console.log(hey("FCECDFCAAB") === "Whoa, chill out!");
//   // Asking a question
//   console.log(hey("Does this cryogenic chamber make me look fat?") === "Sure.");
//   // Asking a numeric question
//   console.log(hey("You are, what, like 15?") === "Sure.");
//   // Asking gibberish
//   console.log(hey("fffbbcbeab?") === "Sure.");
//   // Forceful question
//   console.log(
//     hey("WHAT THE HELL WERE YOU THINKING?") ===
//       "Calm down, I know what I'm doing!"
//   );
//   // Shouting numbers
//   console.log(hey("1, 2, 3 GO!") === "Whoa, chill out!");
//   // Only numbers
//   console.log(hey("4?") === "Sure.");
//   // Shouting with special characters
//   console.log(
//     hey("ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!") === "Whoa, chill out!"
//   );
// })();
