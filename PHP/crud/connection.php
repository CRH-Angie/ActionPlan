<?php
function connection() {
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "PHP DB";

  // Create connection
  $con = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
  } else {
    return $con;
  }

  // $sql = "INSERT INTO Product (product, description) VALUES ('Test', 'Test 1')";

  // if ($con->query($sql) === TRUE) {
  //   echo "New record created successfully";
  // } else {
  //   echo "Error: " . $sql . "<br>" . $con->error;
  // }

  // $con ->close();
}