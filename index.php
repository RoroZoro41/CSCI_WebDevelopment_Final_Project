<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link rel="stylesheet" href="stylesheet.css"> 
    <script defer src="jabascript.js"></script> 
</head>
<body>
    
    <h1> Input Credentials: </h1>

    <form action="index.php" method="post">
        <div class="form-group">
            <label for="username"><i class="fa fa-user"></i> Username:</label>
            <input type="text" id="username" name="username" required autocomplete="on" placeholder="Enter your username">
        </div>
        <div class="form-group">
            <label for="password"><i class="fa fa-lock"></i> Password:</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password">
        </div>
        <button type="submit" class="sexy-btn"><i class="fa-solid fa-paw"></i>Login<i class="fa-solid fa-paw"></i></button>
    </form>

    <!-- Add Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">


</body>
</html>

<?php
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'students');
    $conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
    // include 'connection.php';
    print_r($_POST);

    if ($_POST)
    {
        $sql = "INSERT INTO students (ID, Password, Fname,Lname) VALUES ('44', '123', 'John', 'Doe')";
    }

    mysqli_close($conn);
    
?>

