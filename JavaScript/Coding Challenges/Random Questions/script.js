'use strict';
const trivia = [
  {
    question: 'What is the name of the Earth’s largest ocean?',
    answer: 'The Pacific Ocean',
  },
  {
    question:
      'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
    answer: 'Six',
  },
  {
    question: 'What country won the very first FIFA World Cup in 1930?',
    answer: 'Uruguay',
  },
  {
    question: 'In what year was the first-ever Wimbledon Championship held?',
    answer: '1877',
  },
  {
    question: 'What is often seen as the smallest unit of memory?',
    answer: 'kilobyte',
  },
  {
    question: 'Which planet is the hottest in the solar system?',
    answer: 'Venus',
  },
  {
    question: 'Which country produces the most coffee in the world?',
    answer: 'Brazil',
  },
  { question: 'What is the common name for dried plums?', answer: 'Prunes' },
  {
    question: 'What does BMW stand for (in English)?',
    answer: 'Bavarian Motor Works',
  },
  {
    question: 'Which two countries share the longest international border?',
    answer: 'Canada and the USA',
  },
  {
    question: 'What is the smallest country in the world?',
    answer: 'Vatican City',
  },
  { question: 'Which bone are babies born without?', answer: 'Knee cap' },
  {
    question: 'Which name is rapper Sean Combs better known by?',
    answer: 'P. Diddy',
  },
  {
    question: 'Which British girl group had a member by the name of Mel B?',
    answer: 'Spice Girls',
  },
  { question: 'How many hearts does an octopus have?', answer: 'Three' },
  { question: 'How many eyes does a bee have?', answer: 'Five' },
  {
    question: 'What was the name of the rock band formed by Jimmy Page?',
    answer: 'Led Zeppelin',
  },
  {
    question: 'Who was the first woman to win a Nobel Prize (1903)?',
    answer: 'Marie Curie',
  },
  { question: 'Which mammal has no vocal cords?', answer: 'Giraffe' },
  {
    question:
      'What type of music has been shown to help plants grow better and faster?',
    answer: 'Classical',
  },
  {
    question: 'Power outages in the US are mostly caused by what?',
    answer: 'Squirrels ',
  },
  {
    question: 'What celebrity has their dog cloned– twice?',
    answer: 'Barbara Streisand ',
  },
  { question: 'What was the first state?', answer: 'Delaware ' },
  {
    question: 'What is the painting ‘La Gioconda’ more usually known as?',
    answer: 'Mona Lisa',
  },
  {
    question: 'Ludwig Van Beethoven was born in 1770 in which city?',
    answer: 'Berlin',
  },
  { question: 'Water has a pH level of around?', answer: '7' },
  {
    question: 'What’s the most expensive home in the world?',
    answer: 'Buckingham Palace',
  },
  {
    question: 'What did the Crocodile swallow in Peter Pan?',
    answer: 'An alarm clock',
  },
  { question: 'What’s the hardest rock?', answer: 'A diamond' },
  { question: 'What is the national dish of Spain?', answer: 'Paella' },
  { question: 'Which horoscope sign has a crab?', answer: 'Cancer' },
  { question: 'What color is Absinthe?', answer: 'Green' },
  {
    question: 'The Statue of Liberty was given to the US by which country?',
    answer: 'France',
  },
  {
    question: 'Which US city is known as the City of Brotherly Love?',
    answer: 'Philadelphia',
  },
  { question: 'What substance are nails made out of?', answer: 'Keratin' },
  { question: 'How many children does Oprah Winfrey have?', answer: 'Zero' },
  { question: 'Where is the Sea of Tranquility located?', answer: 'The moon' },
  {
    question: 'What country has the world’s most ancient forest?',
    answer: 'Australia',
  },
  {
    question: 'Which kind of bulbs were once exchanged as a form of currency?',
    answer: 'Tulips',
  },
  {
    question:
      'What color jersey is worn by the winners of each stage of the Tour De France?',
    answer: 'Yellow',
  },
  {
    question: 'Which chess piece can only move diagonally?',
    answer: 'A bishop',
  },
  { question: 'When did the Cold War end?', answer: '1989' },
  { question: 'What is allspice alternatively known as?', answer: 'Pimento' },
  { question: 'Who invented scissors?', answer: 'Leonardo da Vinci' },
  {
    question: 'Which country was the Caesar salad invented in?',
    answer: 'Mexico',
  },
  {
    question:
      'On which ship did Charles Darwin make his famous expedition, which led to his evolution theory?',
    answer: 'HMS Beagle',
  },
  {
    question:
      'In which film did father and son actors Will and Jaden Smith first appear together?',
    answer: 'The Pursuit of Happiness',
  },
  {
    question:
      'Which NFL team holds the record for the most Super Bowl appearances?',
    answer: 'New England Patriots',
  },
  { question: 'In which city is Jim Morrison buried?', answer: 'Paris' },
  {
    question:
      'Which actress keeps her Oscar in her bathroom so guests can hold it and make speeches in the mirror shame-free?',
    answer: 'Kate Winslet',
  },
  {
    question:
      'In medieval England, what was used as currency, specifically for rental agreements?',
    answer: 'Eels',
  },
  {
    question: 'What famous horse won the Triple Crown in 1973?',
    answer: 'Secretariat',
  },
  {
    question: 'What is the most common letter in the English alphabet?',
    answer: 'E',
  },
  {
    question:
      'Chimpanzees and gorillas have human-like fingerprints, and so do what other non-human animals?',
    answer: 'Koalas',
  },
  {
    question: 'A tick bite can make you allergic to what food?',
    answer: 'Red meat',
  },
  {
    question: 'What animal is constitutionally protected in Florida?',
    answer: 'Pigs',
  },
  {
    question: 'What planets literally rain diamonds?',
    answer: 'Saturn and Jupiter',
  },
  {
    question: 'Saudi Arabia imports camels from what country?',
    answer: 'Australia',
  },
  {
    question: 'Who is the youngest person ever to appear on a Billboard chart?',
    answer: 'Blue Ivy Carter',
  },
  {
    question: 'What is the only state that borders just one other state?',
    answer: 'Maine',
  },
  { question: 'What is the Twitter bird’s official?', answer: 'Larry' },
  { question: 'What is a community of ants called?', answer: 'A colony' },
  {
    question: 'Who was said to “float like a butterfly and sting like a bee”?',
    answer: 'Muhammed Ali',
  },
  { question: 'Where did Heineken beer originate?', answer: 'The Netherlands' },
  { question: '“Cirque du Soleil” started in what country?', answer: 'Canada' },
  { question: 'How many signs are there in the Zodiac?', answer: '12' },
  {
    question: 'What are the two fruit juices in a cosmopolitan?',
    answer: 'Cranberry and lime',
  },
  {
    question: 'What object is said to bring bad luck if it is broken?',
    answer: 'A mirror',
  },
  { question: 'Which country did bagels originate from?', answer: 'Poland' },
  {
    question: 'What is the name of the group of men who elect a Pope?',
    answer: 'College of Cardinals',
  },
  {
    question: 'An Apgar score is given to what?',
    answer: 'Health of newborns',
  },
  {
    question:
      'The Candlestick, Lead Pipe, Knife, Revolver, Rope, and what else are the six weapons in a standard game of Clue?',
    answer: 'Wrench',
  },
  {
    question: 'What city did Starbucks open its first store in 1971?',
    answer: 'Seattle',
  },
  {
    question:
      'What do you call filo pastry stuffed with chopped nuts and honey or syrup?',
    answer: 'Baklava',
  },
  { question: 'What is the Jewish New Year called?', answer: 'Rosh Hashanah' },
  {
    question: 'What book starts with the line “Call me Ishmael.”?',
    answer: 'Moby Dick',
  },
  {
    question: 'What is the first element on the Periodic Table?',
    answer: 'Hydrogen',
  },
  {
    question:
      'What object did Ben Franklin attach to the end of a kite string to prove that lightning is electricity?',
    answer: 'A metal key',
  },
  { question: 'What does a Scoville unit measure?', answer: 'Spiciness' },
  {
    question:
      'What US president put a Twinkie in the country’s millennium time capsule?',
    answer: 'Bill Clinton',
  },
  { question: 'What is an ice hockey puck made from?', answer: 'Rubber' },
  {
    question:
      'Apple’s CEO Steve Jobs was known for wearing what color turtleneck?',
    answer: 'Black',
  },
  {
    question: 'How many red stripes are there on the American flag?',
    answer: 'Seven',
  },
  {
    question:
      'What 3-word phrase is written on Martin Luther King’s gravestone?',
    answer: 'Free At Last',
  },
  { question: 'What is Japanese sake made from?', answer: 'Rice' },
  {
    question:
      'What American beer has been long promoted as the “King of Beers”?',
    answer: 'Budweiser',
  },
  {
    question: 'Which fashion designer was shot dead in the summer of 1997?',
    answer: 'Gianni Versace',
  },
  {
    question: 'As what type of beans are chickpeas, also known as?',
    answer: 'Garbanzo',
  },
  { question: 'Galileo was the citizen of which country?', answer: 'Italy' },
  {
    question: 'Which country is the largest producer of vanilla?',
    answer: 'Madagascar',
  },
  {
    question:
      'Who performs the character of Mark Zuckerberg in the movie “The Social Network”?',
    answer: 'Jesse Eisenberg',
  },
  {
    question: 'What is the only fruit that has its seeds on the outside?',
    answer: 'Strawberry',
  },
  {
    question:
      'What is the only metal that is a liquid at normal atmospheric pressure and temperature?',
    answer: 'Mercury',
  },
  {
    question: 'Who was the only US President to resign?',
    answer: 'Richard Nixon',
  },
  { question: 'In which city did Hitler commit suicide?', answer: 'Berlin' },
  {
    question:
      'In ancient Greece, throwing an apple at someone was a declaration of what?',
    answer: 'Love',
  },
  { question: 'Who wrote songs for The Lion King?', answer: 'Elton John' },
  {
    question: 'What U.S. newspaper is nicknamed “the Gray Lady”?',
    answer: 'The New York Times',
  },
  {
    question: 'What is the real first name of Marilyn Monroe?',
    answer: 'Norma Jeane',
  },
  {
    question: 'What country has the most vending machines per capita?',
    answer: 'Japan',
  },
  {
    question: 'What’s the most populous city in the United States?',
    answer: 'New York City',
  },
  {
    question: 'Which fruit floats because 25% of its volume is air?',
    answer: 'Apple',
  },
  { question: 'What’s the brightest star in the sky?', answer: 'Sirius' },
  {
    question: 'The Eiffel Tower was originally intended for what city?',
    answer: 'Barcelona',
  },
  {
    question: 'In which of Britney’s video does she appear as a stewardess?',
    answer: 'Toxic',
  },
  {
    question: 'Carrots are a good source of which vitamin?',
    answer: 'Vitamin A',
  },
  {
    question:
      'What is the name of the prehistoric town in which The Flinstones live?',
    answer: 'Bedrock',
  },
  { question: 'What is the driest continent?', answer: 'Antarctica' },
  {
    question: 'Which US state has the longest cave system in the world?',
    answer: 'Kentucky',
  },
  {
    question: 'What blood type qualifies as a universal donor?',
    answer: 'O negative',
  },
  {
    question: 'What is the most abundant metal in the Earth’s crust?',
    answer: 'Aluminium',
  },
  {
    question: 'What is the most abundant element in the universe?',
    answer: 'Hydrogen',
  },
  { question: 'What was Babe Ruth’s first name?', answer: 'George' },
  {
    question:
      'Who was Sports Illustrated’s first female sportsperson of the year?',
    answer: 'Billie Jean King',
  },
  {
    question: 'Robin Williams won a best supporting actor Oscar for what film?',
    answer: 'Good Will Hunting',
  },
  {
    question:
      'What was the first Disney animated film based on the life of a real person?',
    answer: 'Pocahontas',
  },
  {
    question: 'What character did Michael J. Fox play in ‘Back to the Future’?',
    answer: 'Marty McFly',
  },
  {
    question: 'What was the predecessor to the United Nations?',
    answer: 'League of Nations',
  },
  {
    question: 'A flamboyance is a group of what animals?',
    answer: 'Flamingos',
  },
  { question: 'What color is a polar bear’s skin?', answer: 'Black' },
  { question: 'What is the largest lizard?', answer: 'Komodo dragon' },
  {
    question:
      'The male of what species testicles explode on mating and then dies?',
    answer: 'Honeybee',
  },
  {
    question: 'Europe is separated from Africa by which sea?',
    answer: 'Mediterranean Sea',
  },
  {
    question: 'Canberra is the capital city of which country?',
    answer: 'Australia',
  },
  { question: 'New York City comprises how many boroughs?', answer: '5' },
  { question: 'Which nuts are used to make marzipan?', answer: 'Almonds' },
  { question: 'Botany is the scientific study of what?', answer: 'Plants' },
  {
    question: 'Tanks were used in battle for the first time in which conflict?',
    answer: 'World War 1',
  },
  {
    question: 'Squab is a name given to the young of which bird?',
    answer: 'Pigeon',
  },
  {
    question: 'Which female singer discovered a ‘Genie in a Bottle’ in 1999?',
    answer: 'Christina Aguilera',
  },
  {
    question:
      'Complete the title of a 1979 number one by Blondie – ‘Heart of…’',
    answer: 'Glass',
  },
  {
    question: 'Which Italian fascist leader was known as ‘Il Duce’?',
    answer: 'Mussolini',
  },
  {
    question: 'If a male donkey is a jack, what is the female called?',
    answer: 'Jenny',
  },
  {
    question: 'In what country did carving jack o’ lanterns originate?',
    answer: 'Ireland',
  },
  {
    question:
      'In what American state is it illegal to dress up like a priest or a nun?',
    answer: 'Alabama',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  {
    question:
      'What has a gravitational pull so strong that even light cannot escape it?',
    answer: 'Black Hole',
  },
  {
    question: 'Which 1998 Disney film was Lindsay Lohan’s film debut?',
    answer: 'Parent Trap',
  },
  {
    question:
      'What type of business did Annie have that failed in “Bridesmaids”?',
    answer: 'Bakery',
  },
  {
    question: 'What were the two sides in World War II known as?',
    answer: 'Allies and Axis',
  },
  {
    question:
      'What number did Derek Jeter wear on his New York Yankees jersey?',
    answer: '2',
  },
  {
    question:
      'What vitamin does the sun’s ultraviolet rays help the skin produce?',
    answer: 'Vitamin D',
  },
  { question: 'What is “jaggery” used in Indian cooking?', answer: 'Sugar' },
  {
    question: 'What TV show won the most Emmys in 2018?',
    answer: 'The Marvelous Mrs. Maisel',
  },
  { question: 'Nepal is located on which continent?', answer: 'Asia' },
  { question: 'What does a seismologist study?', answer: 'Earthquakes' },
  {
    question: 'Where did Barack Obama teach constitutional law?',
    answer: 'University of Chicago',
  },
  {
    question: 'Which sea is located in Israel and Jordan?',
    answer: 'Dead Sea',
  },
  {
    question: 'What are the bones in the fingers called?',
    answer: 'Phalanges',
  },
  { question: 'What company makes the Butterfinger bar?', answer: 'Nestle' },
  {
    question:
      'Which character becomes Brienne’s squire in season 4 of “Game of Thrones”?',
    answer: 'Podrick Payne',
  },
  {
    question: 'What particle in an atom has a positive charge?',
    answer: 'Proton',
  },
  {
    question: 'What is the biggest artery in the human body?',
    answer: 'Aorta',
  },
  { question: 'What is the name of Jordan’s capital city?', answer: 'Amman' },
  { question: 'What is Harry Potter’s Patronus?', answer: 'A stag' },
  {
    question:
      'What candy was used to lure E.T. in the 1982 movie “E.T.: The Extra-Terrestrial”?',
    answer: 'Reese’s Pieces',
  },
  {
    question: 'The tuba is the largest member of which musical family?',
    answer: 'Brass',
  },
  {
    question: 'Which is the main substance used to make a crayon?',
    answer: 'Wax',
  },
  {
    question: 'The video game “Happy Feet” features what animals?',
    answer: 'Penguins',
  },
  {
    question: 'What actress won her first Oscar for “Kramer vs. Kramer”?',
    answer: 'Meryl Streep',
  },
  {
    question:
      'What object of Dwight’s did Jim put in Jell-O on the TV show “The Office”?',
    answer: 'Stapler',
  },
  {
    question: 'Who voices Morty in the series “Rick and Morty”?',
    answer: 'Justin Rolland',
  },
  {
    question: '“You’re gonna need a bigger boat” originated in what movie?',
    answer: 'Jaws',
  },
  {
    question: 'What does the “R” stand for on the rating of a movie?',
    answer: 'Restricted',
  },
  {
    question: 'Who played Cher Horowitz in the movie “Clueless”?',
    answer: 'Alicia Silverstone',
  },
  { question: 'Which artist painted “Guernica”?', answer: 'Pablo Picasso' },
  {
    question: 'What country produced the most strawberries in 2016?',
    answer: 'China',
  },
  {
    question: 'The traditional Wimbledon colors are green, and what?',
    answer: 'Purple',
  },
  {
    question:
      'On the television show “How I Met Your Mother,” what is Lily’s occupation?',
    answer: 'Kindergarten Teacher',
  },
  {
    question: 'Which art movement is Salvador Dali associated with?',
    answer: 'Surrealism',
  },
  { question: 'Where did rap superstar Eminem grow up?', answer: 'Detroit' },
  {
    question: 'In what city did Princess Diana suffer her fatal car crash?',
    answer: 'Paris',
  },
  { question: 'What grows from an acorn?', answer: 'Oak Tree' },
  {
    question:
      'What prison film starring Tim Robbins was based on a story by Stephen King?',
    answer: 'The Shawshank Redemption',
  },
  {
    question: 'Which U.S. state has “Garden State” as its nickname?',
    answer: 'New Jersey',
  },
  {
    question: 'Which type of fruit juice did Dole sell first?',
    answer: 'Pineapple',
  },
  { question: 'What is the main ingredient in a falafel?', answer: 'Chickpea' },
  { question: 'What currency is used in South Africa?', answer: 'Rand' },
  {
    question: 'Port-au-Prince is the capital of which country?',
    answer: 'Haiti',
  },
  {
    question:
      'What major movie actor’s first role was in “A Nightmare On Elm Street”?',
    answer: 'Johnny Depp',
  },
  {
    question: 'What was Toyota’s first popular hybrid car called?',
    answer: 'Prius',
  },
  {
    question: 'What did the first vending machine dispense?',
    answer: 'Holy Water',
  },
  {
    question: 'Who created the animated series “Futurama”?',
    answer: 'Matt Groening',
  },
  { question: 'What is the most populous city in Canada?', answer: 'Toronto' },
  {
    question: 'Taylor Swift grew up on what type of farm?',
    answer: 'Christmas Tree Farm',
  },
  {
    question:
      'Which Doors song is about Jim Morrison’s relationship with Pamela Courson?',
    answer: 'Queen Of The Highway',
  },
  {
    question:
      'Which President of South Africa ordered Nelson Mandela’s release from prison?',
    answer: 'De Klerk',
  },
  {
    question:
      'Which 2008 comedy had the tagline “Put this in your pipe and smoke it”?',
    answer: 'Pineapple Express',
  },
  {
    question: 'Islamabad is the capital of which country?',
    answer: 'Pakistan',
  },
  {
    question:
      'American pioneer, John Chapman, was famous for planting which kind of tree?',
    answer: 'Apple Trees',
  },
  { question: 'Where is the uvula located?', answer: 'In The Throat' },
  { question: 'What gas makes soda bubbly?', answer: 'Carbon Dioxide' },
  {
    question: 'Which country has a red flag with a star in the middle?',
    answer: 'Morocco',
  },
  {
    question: 'Who preceded Fidel Castro as the political leader of Cuba?',
    answer: 'Fulgencio Batista',
  },
  {
    question: 'How many sides does the home plate in baseball have?',
    answer: '5',
  },
  {
    question:
      'What color dresses do Chinese women traditionally wear on their wedding day?',
    answer: 'Red',
  },
  {
    question:
      'Tom Cruise considered pursuing a career in what sport before being injured?',
    answer: 'Wrestling',
  },
  {
    question:
      'What country is bordered by Germany, the Czech Republic, Slovakia, and Ukraine?',
    answer: 'Poland',
  },
  {
    question: 'The Da Vinci Code opens with a murder in which famous museum?',
    answer: 'Lourve',
  },
  {
    question: 'Which insect can indicate the air temperature?',
    answer: 'Cricket',
  },
  {
    question: 'What candy ran the promotion for baseball’s one-millionth run?',
    answer: 'Tootsie Rolls',
  },
  {
    question: 'What country is the band “The Cranberries” from?',
    answer: 'Ireland',
  },
  {
    question: 'Blueberries are native to which continent?',
    answer: 'North America',
  },
  {
    question: 'A book by Barack Obama is titled “The Audacity of” what?',
    answer: 'Hope',
  },
  {
    question:
      'What type of lens has a thin middle and makes objects appear smaller?',
    answer: 'Concave',
  },
  { question: 'What is the Hawaiian name for yellowfin tuna?', answer: 'Ahi' },
  {
    question:
      'Rihanna banned fans from bringing what items to her U.K. concerts in 2008?',
    answer: 'Umbrellas',
  },
  {
    question: 'Who created the alien rock superstar Ziggy Stardust?',
    answer: 'David Bowie',
  },
  {
    question:
      'Which young girl helped drive the English from French soil in the 15th century?',
    answer: 'Joan of Arc',
  },
  {
    question:
      'What U.S. President coined the phrase “Good to the last drop,” referring to coffee?',
    answer: 'Theodore Roosevelt',
  },
  {
    question: 'What is the biggest supermarket chain in the U.S.?',
    answer: 'Kroger Co.',
  },
  {
    question: 'On every continent, there is a city named what?',
    answer: 'Rome',
  },
  {
    question: 'Which name are the Sandwich Islands, better known as?',
    answer: 'Hawaii',
  },
];

const btnQ = document.querySelector('.btnQ');
const btnA = document.querySelector('.btnA');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

btnQ.addEventListener('click', function () {
  const rand = Math.round(Math.random() * trivia.length);
  question.textContent = trivia[`${rand}`].question;
  btnA.addEventListener('click', function () {
    answer.textContent = trivia[`${rand}`].answer;
  });
  answer.textContent = '';
});
