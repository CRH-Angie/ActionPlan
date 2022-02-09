<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guess the Word</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">
  <script src="js/jquery-3.6.0.min.js"></script>
</head>
<body>
  <?php 
    $first = array (
      "wiggly" => array (
        "num" => 1,
        "answer" => 'wiggly',
        "wordtype" => 'adjective',
        "definition" => 'shaped like a line with many curves'
      ),
      "unwritten" => array (
        "num" => 2,
        "answer" => 'unwritten',
        "wordtype" => 'adjective',
        "definition" => 'understood and accepted by everyone, although not formally established.'
      ),
      "faulty" => array (
        "num" => 3,
        "answer" => 'faulty',
        "wordtype" => 'adjective',
        "definition" => 'working badly or unreliably because of imperfections.'
      ),
      "grandmother" => array (
        "num" => 4,
        "answer" => 'grandmother',
        "wordtype" => 'noun',
        "definition" => 'the mother of one\'s father or mother'
      ),
      "pry" => array (
        "num" => 5,
        "answer" => 'pry',
        "wordtype" => 'verb',
        "definition" => 'inquire too closely into a person\'s private affairs.'
      ),
      "less" => array (
        "num" => 6,
        "answer" => 'less',
        "wordtype" => 'pronoun',
        "definition" => 'a smaller amount or quantity of something.'
      ),
      "rot" => array (
        "num" => 7,
        "answer" => 'rot',
        "wordtype" => 'verb',
        "definition" => '(chiefly of animal or vegetable matter) decay or cause to decay by the action of bacteria and fungi; decompose.'
      )
    );
    $second = array (
      "cruel" => array (
        "num" => 1,
        "answer" => 'cruel',
        "wordtype" => 'adjective',
        "definition" => 'willfully causing pain or suffering to others, or feeling no concern about it.'
      ),
      "park" => array (
        "num" => 2,
        "answer" => 'park',
        "wordtype" => 'noun',
        "definition" => 'a large public green area in a town, used for recreation.'
      ),
      "enjoy" => array (
        "num" => 3,
        "answer" => 'enjoy',
        "wordtype" => 'verb',
        "definition" => 'take delight or pleasure in (an activity or occasion)'
      ),
      "march" => array (
        "num" => 4,
        "answer" => 'march',
        "wordtype" => 'verb',
        "definition" => 'walk in a military manner with a regular measured tread.'
      ),
      "recluse" => array (
        "num" => 5,
        "answer" => 'recluse',
        "wordtype" => 'noun',
        "definition" => 'a person who lives a solitary life and tends to avoid other people.'
      ),
      "hover" => array (
        "num" => 6,
        "answer" => 'hover',
        "wordtype" => 'noun',
        "definition" => 'an act of remaining in the air in one place.'
      ),
      "earthenware" => array (
        "num" => 7,
        "answer" => 'earthenware',
        "wordtype" => 'noun',
        "definition" => 'pottery made of clay fired to a porous state which can be made impervious to liquids by the use of a glaze.'
      )
    );
    $third = array (
      "briskly" => array (
        "num" => 1,
        "answer" => 'briskly',
        "wordtype" => 'adverb',
        "definition" => 'in an active, quick, or energetic way.'
      ),
      "selection" => array (
        "num" => 2,
        "answer" => 'selection',
        "wordtype" => 'noun',
        "definition" => 'the action or fact of carefully choosing someone or something as being the best or most suitable.'
      ),
      "system" => array (
        "num" => 3,
        "answer" => 'system',
        "wordtype" => 'noun',
        "definition" => 'a set of things working together as parts of a mechanism or an interconnecting network.'
      ),
      "damage" => array (
        "num" => 4,
        "answer" => 'damage',
        "wordtype" => 'noun',
        "definition" => 'physical harm caused to something in such a way as to impair its value, usefulness, or normal function.'
      ),
      "transport" => array (
        "num" => 5,
        "answer" => 'transport',
        "wordtype" => 'verb',
        "definition" => 'take or carry (people or goods) from one place to another by means of a vehicle, aircraft, or ship.'
      ),
      "veneer" => array (
        "num" => 6,
        "answer" => 'veneer',
        "wordtype" => 'verb',
        "definition" => 'cover or disguise (someone or something\'s true nature) with an attractive appearance.'
      ),
      "vanish" => array (
        "num" => 7,
        "answer" => 'vanish',
        "wordtype" => 'verb',
        "definition" => 'disappear suddenly and completely.'
      )
    );
    $fourth = array (
      "deliberately" => array (
        "num" => 1,
        "answer" => 'deliberately',
        "wordtype" => 'adverb',
        "definition" => 'consciously and intentionally; on purpose.'
      ),
      "righteously" => array (
        "num" => 2,
        "answer" => 'righteously',
        "wordtype" => 'adverb',
        "definition" => 'acting in accord with divine or moral law'
      ),
      "automatically" => array (
        "num" => 3,
        "answer" => 'automatically',
        "wordtype" => 'adverb',
        "definition" => 'without conscious thought or attention; spontaneously.'
      ),
      "quarrelsome" => array (
        "num" => 4,
        "answer" => 'quarrelsome',
        "wordtype" => 'adjective',
        "definition" => 'having an aggressive or fighting attitude'
      ),
      "fallacious" => array (
        "num" => 5,
        "answer" => 'fallacious',
        "wordtype" => 'adjective',
        "definition" => 'based on a mistaken belief.'
      ),
      "inept" => array (
        "num" => 6,
        "answer" => 'inept',
        "wordtype" => 'adjective',
        "definition" => 'having or showing no skill; clumsy.'
      ),
      "obfuscate" => array (
        "num" => 7,
        "answer" => 'obfuscate',
        "wordtype" => 'verb',
        "definition" => 'render obscure, unclear, or unintelligible.'
      )
    );
    $fifth = array (
      "recondite" => array (
        "num" => 1,
        "answer" => 'recondite',
        "wordtype" => 'adjective',
        "definition" => 'difficult or impossible for one of ordinary understanding or knowledge to comprehend'
      ),
      "abysmal" => array (
        "num" => 2,
        "answer" => 'abysmal',
        "wordtype" => 'adjective',
        "definition" => 'Extremely Bad'
      ),
      "obnoxious" => array (
        "num" => 3,
        "answer" => 'obnoxious',
        "wordtype" => 'adjective',
        "definition" => 'extremely unpleasant.'
      ),
      "florid" => array (
        "num" => 4,
        "answer" => 'florid',
        "wordtype" => 'adjective',
        "definition" => 'having a red or flushed complexion.'
      ),
      "accretion" => array (
        "num" => 5,
        "answer" => 'accretion',
        "wordtype" => 'noun',
        "definition" => 'accretion'
      ),
      "iconoclast" => array (
        "num" => 6,
        "answer" => 'iconoclast',
        "wordtype" => 'noun',
        "definition" => 'a person who attacks cherished beliefs or institutions.'
      ),
      "accretion" => array (
        "num" => 7,
        "answer" => 'accretion',
        "wordtype" => 'noun',
        "definition" => 'the process of growth or increase, typically by the gradual accumulation of additional layers or matter.'
      )
    );
  ?>
  <h1>Guess the Word</h1>
  <!-- <div class="team">
    <h2>Teams:</h2>
    <div class="team1">Team 1</div>
    <div class="team2">Team 2</div>
  </div> -->
  <ul class="choices flex">
    <?php for($a=1; $a<=7; $a++){ ?>
    <li class="first"><a class="modal-button" id="firstModalBtn<?php echo $a;?>" href="#first<?php echo $a;?>">100</a></li>
    <li class="second"><a class="modal-button" id="secondModalBtn<?php echo $a;?>" href="#second<?php echo $a;?>">200</a></li>
    <li class="third"><a class="modal-button" id="thirdModalBtn<?php echo $a;?>" href="#third<?php echo $a;?>">300</a></li>
    <li class="fourth"><a class="modal-button" id="fourthModalBtn<?php echo $a;?>" href="#fourth<?php echo $a;?>">400</a></li>
    <li class="fifth"><a class="modal-button" id="fifthModalBtn<?php echo $a;?>" href="#fifth<?php echo $a;?>">500</a></li>
    <?php } ?>
  </ul>
  <ul>
    <?php foreach($first as $first) { ?>
    <li class="modal" id="first<?php echo $first['num']; ?>" data-lines="<?php echo $first['answer']; ?>">
      <div class="innerContainer">
        <div class="flex">
          <h2>What word is this: <span class="guess"><i><?php echo $first['wordtype']; ?></i> <?php echo $first['definition']; ?></span></h2>
          <div class="point">100</div>
        </div>
        <div class="answer hide">Answer: <?php echo $first['answer']; ?></div>
        <div class="flex">
          <input type="text" name="input" maxlength="1" id="input"><div id="word-lines"></div>
        </div>
        <div class="team teampoints">
          <div class="team1">Team 1: <span>0</span></div>
          <div class="team2">Team 2: <span>0</span></div>
        </div>
        <p id="lives"></p>
        <div class="tries"><div id="try">Tries: In every hint you will lose 10 points. </div></div>
        <div class="buttons flex">
          <div class="show"><button>Show</button></div>
          <!-- <div class="wrong"><button data-point="-100">X</button></div>
          <div class="correct"><button data-point="100">O</button></div> -->
        </div>
      </div>
    </li>
    <?php } ?>
    <?php  foreach($second as $second) { ?>
    <li class="modal" id="second<?php echo $second['num']; ?>" data-lines="<?php echo $second['answer']; ?>">
      <div class="innerContainer">
        <div class="flex">
          <h2>What word is this: <span class="guess"><i><?php echo $second['wordtype']; ?></i> <?php echo $second['definition']; ?></span></h2>
          <div class="point">200</div>
        </div>
        <div class="answer hide">Answer: <?php echo $second['answer']; ?></div>
        <div class="flex">
          <input type="text" name="input" maxlength="1" id="input"><div id="word-lines"></div>
        </div>
        <div class="team teampoints">
          <div class="team1">Team 1: <span>0</span></div>
          <div class="team2">Team 2: <span>0</span></div>
        </div>

        <p id="lives"></p>
        <div class="tries"><div id="try">Tries: In every hint you will lose 10 points. </div></div>
        <div class="buttons flex">
          <div class="show"><button>Show</button></div>
          <!-- <div class="wrong"><button data-point="-200">X</button></div>
          <div class="correct"><button data-point="200">O</button></div> -->
        </div>
      </div>
    </li>
    <?php } ?>
    <?php  foreach($third as $third) { ?>
    <li class="modal" id="third<?php echo $third['num']; ?>" data-lines="<?php echo $third['answer']; ?>">
      <div class="innerContainer">
        <div class="flex">
          <h2>What word is this: <span class="guess"><i><?php echo $third['wordtype']; ?></i> <?php echo $third['definition']; ?></span></h2>
          <div class="point">300</div>
        </div>
        <div class="answer hide">Answer: <?php echo $third['answer']; ?></div>
        <div class="flex">
          <input type="text" name="input" maxlength="1" id="input"><div id="word-lines"></div>
        </div>
        <div class="team teampoints">
          <div class="team1">Team 1: <span>0</span></div>
          <div class="team2">Team 2: <span>0</span></div>
        </div>

        <p id="lives"></p>
        <div class="tries"><div id="try">Tries: In every hint you will lose 10 points. </div></div>
        <div class="buttons flex">
          <div class="show"><button>Show</button></div>
          <!-- <div class="wrong"><button data-point="-300">X</button></div>
          <div class="correct"><button data-point="300">O</button></div> -->
        </div>
      </div>
    </li>
    <?php } ?>
    <?php  foreach($fourth as $fourth) { ?>
    <li class="modal" id="fourth<?php echo $fourth['num']; ?>" data-lines="<?php echo $fourth['answer']; ?>">
      <div class="innerContainer">
        <div class="flex">
          <h2>What word is this: <span class="guess"><i><?php echo $fourth['wordtype']; ?></i> <?php echo $fourth['definition']; ?></span></h2>
          <div class="point">400</div>
        </div>
        <div class="answer hide">Answer: <?php echo $fourth['answer']; ?></div>
        <div class="flex">
          <input type="text" name="input" maxlength="1" id="input"><div id="word-lines"></div>
        </div>
        <div class="team teampoints">
          <div class="team1">Team 1: <span>0</span></div>
          <div class="team2">Team 2: <span>0</span></div>
        </div>

        <p id="lives"></p>
        <div class="tries"><div id="try">Tries: In every hint you will lose 10 points. </div></div>
        <div class="buttons flex">
          <div class="show"><button>Show</button></div>
          <!-- <div class="wrong"><button data-point="-400">X</button></div>
          <div class="correct"><button data-point="400">O</button></div> -->
        </div>
      </div>
    </li>
    <?php } ?>
    <?php  foreach($fifth as $fifth) { ?>
    <li class="modal" id="fifth<?php echo $fifth['num']; ?>" data-lines="<?php echo $fifth['answer']; ?>">
      <div class="innerContainer">
        <div class="flex">
          <h2>What word is this: <span class="guess"><i><?php echo $fifth['wordtype']; ?></i> <?php echo $fifth['definition']; ?></span></h2>
          <div class="point">500</div>
        </div>
        <div class="answer hide">Answer: <?php echo $fifth['answer']; ?></div>
        <div class="flex">
          <input type="text" name="input" maxlength="1" id="input"><div id="word-lines"></div>
        </div>
        <div class="team teampoints">
          <div class="team1">Team 1: <span>0</span></div>
          <div class="team2">Team 2: <span>0</span></div>
        </div>

        <p id="lives"></p>
        <div class="tries"><div id="try">Tries: In every hint you will lose 10 points. </div></div>
        <div class="buttons flex">
          <div class="show"><button>Show</button></div>
          <!-- <div class="wrong"><button data-point="-500">X</button></div>
          <div class="correct"><button data-point="500">O</button></div> -->
        </div>
      </div>
    </li>
    <?php } ?>
  </ul>
  <script src="js/main.js"></script>
</body>
</html> 