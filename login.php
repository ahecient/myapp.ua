<?php
      session_start();
      if(isset($_POST['submit'])){
        $username = $_POST['username']; $password = $_POST['password'];
        if($username === 'admin' && $password === 'password'){
          $_SESSION['login'] = true;
          header('LOCATION:admin.php'); 
          die();
        } {
          echo "<div class='alert alert-danger'>Username and Password do not match.</div>";
        }

      }
  ?>
<!DOCTYPE html>
<html>
   <head>
     <meta http-equiv='content-type' content='text/html;charset=utf-8' />
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
   </head>
<body>
  <div class="container">

    <form action="" method="post">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" class="form-control" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" name="password" required>
      </div>
      <button type="submit" name="submit" class="btn btn-default">Login</button>
    </form>
  </div>
</body>
</html>