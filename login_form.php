<?php


session_start();

   // Get the email and password from the login form
   if(isset($_POST['submit'])){
   $email = $_POST['email'];
   $password = $_POST['password'];

   // Read the contents of the file into a string
   $fileContents = file_get_contents('formdata.txt');

   // Explode the file contents by newline character to get each JSON object as a separate string
   $jsonStrings = explode(PHP_EOL, $fileContents);

   // Remove any empty strings
   $jsonStrings = array_filter($jsonStrings);

   // Convert each JSON string to an array
   $dataArray = array_map(function($jsonString) {
       return json_decode($jsonString, true);
   }, $jsonStrings);

   // Check if the $dataArray is empty
   if (empty($dataArray)) {
      $error[] = 'No data found';
   } else {
       // Check if the email and password match with any of the data in the file
       $matchFound = false;
       $emailNotExist = false;
       foreach ($dataArray as $data) {
           if ($data['email'] == $email && $data['password'] == $password) {
               $matchFound = true;
               $userType = $data['user_type'];
               $userName = $data['name'];
               $emailNotExist= false;
               break;
           }
            else if($data['email'] == $email && $data['password'] != $password){
               $error[] = 'Password is wrong';
               $emailNotExist= false;
               break;
           }else{
            $emailNotExist= true;
           }
       }
       if ($matchFound) {
           // Redirect to the appropriate page based on user type
           if ($userType == 'producer') {
               $_SESSION['admin_name'] = $data['name'];
               header('location:producer_main.html');
               exit;
           } else if ($userType == 'consumer') {
               $_SESSION['user_name'] = $data['name'];
               header('location:consumer_main.html');
               exit;
           }
       } 
       if($emailNotExist) {
         $error[] = 'Email is NOT exist!';
       }
   }
} else {
   $error[] = 'Please enter email and password';
}

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>login form</title>

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
   
<div class="form-container">

   <form method="post" action="">
      <h3>login now</h3>
      <?php
      if(isset($error)){
         foreach($error as $error){
            echo '<span class="error-msg">'.$error.'</span>';
         };
      }
      ?>
   
      <input type="email" name="email" required placeholder="enter your email" >
      <input type="password" name="password" required placeholder="enter your password" >
      <input type="submit" name="submit" value="login now" class="form-btn">
      <p>don't have an account? <a href="register_form.php">register now</a></p>
      
   </form>

</div>

</body>
</html>


