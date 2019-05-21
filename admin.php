<?php
    session_start();
    if(($_SESSION['login']==false)) {
        header('LOCATION:login.php'); 
    }
?>
<html>
    <head>
        <title>Admin Page</title>
    </head>
    <body>
        This is admin page view able only by logged in users.
        <a href="logout.php">Click here</a> to Logout
    </body> 
</html>