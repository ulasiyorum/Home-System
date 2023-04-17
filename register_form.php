<?php


?>
<?php 
if(isset($_POST['submit'])){
   $name = $_POST['name'];
   $email = $_POST['email'];
   $pass = $_POST['password'];
   $cpass = $_POST['cpassword'];
   $user_type = $_POST['user_type'];

   // Check if all required fields have been filled in
   if(!empty($name) && !empty($email) && !empty($pass) && !empty($cpass) && !empty($user_type)) {
   
      // Check if the email already exists in the file with user_type = "admin"
      $fileContents = file_get_contents('formdata.txt');
      $jsonStrings = explode(PHP_EOL, $fileContents);
      $jsonStrings = array_filter($jsonStrings);
      $dataArray = array_map(function($jsonString) {
         return json_decode($jsonString, true);
      }, $jsonStrings);

      // password not matched
      if($pass != $cpass){
         $error[] = 'password not matched!';
      }

      //same email and not more than one admin
      foreach ($dataArray as $data) {
         if ($data['email'] == $email) {
            $error[] = 'An account with this email is already exists.';
            break;
         }else if($user_type == "producer"){
            if($data['user_type'] == "producer"){
               $error[] = 'Producer account is already exists.';
               break;
            } 
         }
      }
      
      // If no error has occurred, create the new user account
      if (!isset($error)) {
         // Create an object
         $data = new stdClass();
         $data->name = $name;
         $data->email = $email;
         $data->password = $pass;
         $data->user_type = $user_type;

         //CREATE AN ARRAY
         $dataArray = (array) $data;

         // Convert the object to a JSON string
         $jsonString = json_encode($dataArray);

         $filename = 'formdata.txt';
         $mode = 'a';
         file_put_contents($filename, $jsonString . PHP_EOL, FILE_APPEND);

         header("Location: login_form.php");
         exit();
      }
   }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>register form</title>

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
   
<div class="form-container">

   <form action="" method="post">
      <h3>register now</h3>
      <?php
      if(isset($error)){
         foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
         };
      }
      ?>
      <input type="text" name="name" required placeholder="enter your name">
      <input type="email" name="email" required placeholder="enter your email">
      <input type="password" name="password" required placeholder="enter your password">
      <input type="password" name="cpassword" required placeholder="confirm your password">
      <select name="user_type">
         <option value="consumer">consumer</option>
         <option value="producer">producer</option>
      </select>
      <input type="submit" name="submit" value="register now" class="form-btn">
      <p>already have an account? <a href="login_form.php">login now</a></p>
   </form>

</div>

</body>
</html>

