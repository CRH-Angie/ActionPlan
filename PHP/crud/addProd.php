<?php 
include_once 'crud/connection.php'; 
$con = connection();
 if (isset($_POST['submit'])) {
  $title = $_POST['title'];
  $description = $_POST['description'];
  $sql = "INSERT INTO Product (product, description) VALUES ('$title', '$description')";
    if ($con->query($sql) === false) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $con->error;
    }
    $con ->close();
  }
?>
<div class="modal addProd">
  <div class="addProdContainer">
    <div class="addProdHeader"><h2>Add a Product</h2></div>
    <div class="addProdBody">
      <form method="post">
        <div class="field">
          <label for="title"></label>
          <input type="text" name="title" placeholder="Title">
        </div>
        <div class="field">
          <label for="description"></label>
          <textarea name="description" id="description" placeholder="Describe Product" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" name="submit">
      </form>
    </div>
  </div>
</div>