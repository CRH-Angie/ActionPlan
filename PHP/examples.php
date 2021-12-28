<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Examples</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/modal.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
<?php include 'includes/header.php'; ?>
  <div class="container">
    <h2>Our first PHP script: hello.php</h2>
    <?php echo '<p>Hello World</p>'; ?> 
    <br><hr><br>
    <!-- <h2>Get system information from PHP</h2>
    <?php //phpinfo(); ?>
    <br><hr><br> -->
    <h2>Printing a variable (Array element)</h2>
    <?php echo $_SERVER['HTTP_USER_AGENT']; ?>
    <br><hr><br>
    <h2>Example using control structures and functions</h2>
    <?php
      if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
        echo 'You are using Internet Explorer.<br />';
      } else {
        echo 'You are NOT using Internet Explorer.';
      }
    ?>
    <br><hr><br>
    <h2>Mixing both HTML and PHP modes</h2>
    <?php if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) { ?>
      <h3>strpos() must have returned non-false</h3>
      <p>You are using Internet Explorer</p>
    <?php } else { ?>
      <h3>strpos() must have returned false</h3>
      <p>You are NOT using Internet Explorer</p>
    <?php } ?>

    <p>
      In order to look for IE in 2021, we write: <br>
        if (strpos($_SERVER['HTTP_USER_AGENT'], 'Edg') !== FALSE) {
          echo 'You are using Internet Explorer.';
        }
        <br>
        Or If we want to include old IEs we can use Declan's Support:<br>
        if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE ||
          strpos($_SERVER['HTTP_USER_AGENT'], 'Trident') !== FALSE ||
          strpos($_SERVER['HTTP_USER_AGENT'], 'Edg') !== FALSE) {
          echo 'You are using Internet Explorer.';
      }
    </p>
    <br><hr><br>
    <h2> A simple HTML form</h2>
    <form action="#" method="post">
      <p>Your name: <input type="text" name="name" /></p>
      <p>Your age: <input type="number" name="age" /></p>
      <p><input type="submit" /></p>
    </form>
    <br><hr><br>
    <h2>Printing data from our form</h2>
    Hi <?php echo htmlspecialchars($_POST['name']); ?>.
    You are <?php echo (int)$_POST['age']; ?> years old.
    <br><hr><br>
  </div>
<?php include 'includes/footer.php'; ?>
</body>
</html>