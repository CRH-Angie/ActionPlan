<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Page</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/modal.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="js/addProd.js"></script>
</head>
<body>
<?php include 'includes/header.php'; ?>
<?php include 'crud/connection.php'; ?>
<?php include 'crud/addProd.php'; ?>
<div class="container">
  <div class="titleHeader">
    <h2>CRUD</h2>
    <button class="addProdBtn">Add Product</button>
  </div>
  <table>
    <th>
      <tr>
        <td>Title</td>
        <td>Description</td>
        <td>Action</td>
      </tr>
    </th>
    <tbody>
      <tr>
        <td>Sample</td>
        <td>Sample Description</td>
        <td class="action"><span><button>Edit</button></span> <span><button>Delete</button></span></td>
      </tr>
    </tbody>
  </table>
</div>
<?php include 'includes/footer.php'; ?>
</body>
</html>