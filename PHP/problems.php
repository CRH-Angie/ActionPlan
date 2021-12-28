<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Problems</title>
</head>
<body>
Check if Palindrome <br>
<?php
function Palindrome($n) {
  $revString = strrev($n);
  if ($revString == $n){
    echo $n." is a Palindrome.\n";
  } else {
    echo $n." is not a Palindrome.\n";
  }
}

$n = '11';
Palindrome($n);
?>

<hr>
PHP: Exercise-35 with Solution
Write a PHP program to remove duplicates from a sorted list.

Input: (1,1,2,2,3,4,5,5)
Output: (1,2,3,4,5)

Sample Solution: -

PHP Code:
<?php
function uniqueOnly($list) {
  $unique_list = array_values(array_unique($list));
  return $unique_list ;
}
// $list = array('a','a','b','b','c','c');
$list = array(1,1,2,2,3,4,5,5);
foreach(uniqueOnly($list) as $value){
  echo $value, ' ';
}
?>

<hr>
Write a PHP program to print out the multiplication table upto 6*6.

Sample Solution: -

PHP Code:

<?php
for ($i = 1; $i < 7; $i++) {
  for ($j = 1; $j < 7; $j++) {
     if ($j == 1) {
       echo str_pad($i*$j, 2, " ", STR_PAD_LEFT);
     } else {
       echo str_pad($i*$j, 4, " ", STR_PAD_LEFT);
     }
  }
  echo "\n";
}
?>

<hr>
Write a PHP program to print the number of prime numbers which are less than or equal to a given integer.

Input:
n (1 ? n ? 999,999) .

Pictorial Presentation:

PHP: Print the number of prime numbers which are less than or equal to a given integer.
Sample Solution: -

PHP Code:

<?php

$a = array_fill(0, 1000000, true);
$a[0] = $a[1] = false;
 
for($i = 2; $i * $i < 1000000; $i++){
    if(!$a[$i]) continue;
    for($j = $i * $i; $j < 1000000; $j += $i){
        $a[$j] = false;
    }
}
 
$sum = array_fill(0, 1000000, 0);
 
for($i = 1; $i < 1000000; $i++){
    $sum[$i] += $sum[$i - 1];
    if($a[$i]) $sum[$i]++;
}
 
while(fscanf(STDIN, "%d", $n)){
    echo "Number of prime numbers which are less than or equal to n: ";
    echo $sum[$n] . "\n";
}
?>




<hr>
<?php
	function addTwoNumbers($a, $b){
		$output = 0;
		if(is_numeric($a) && is_numeric($b)){
			if($a < 10 && $b < 10){
				$output = $a + $b;
			}else{
				$output = "Invalid Input";
			}
		}else{
			$output = "Invalid Input";
		}
		return $output;
	}

	$inputLine = fgets(STDIN);
	$inputArr = explode(' ',$inputLine); 

	$a = $inputArr[0]; 
	$b = $inputArr[1];
	
	echo addTwoNumbers($a, $b);
?>

<hr>
<?php
// PHP code to get the Fibonacci series
function Fibonacci($n){
  
    $num1 = 0;
    $num2 = 1;
  
    $counter = 0;
    while ($counter < $n){
        $result .= ' '.$num1;
        $num3 = $num2 + $num1;
        $num1 = $num2;
        $num2 = $num3;
        $counter = $counter + 1;
    }
    
    return $result;
}

$n = 7;
echo Fibonacci($n);
?>



</body>
</html>