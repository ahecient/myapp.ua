<?php session_start(); /* Starts the session */
$_SESSION['login'] = false; /* Destroy started session */
header("location:login.php");  /* Redirect to login page */
exit;
?>
