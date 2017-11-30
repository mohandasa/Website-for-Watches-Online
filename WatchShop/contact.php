<?php

$name = $_REQUEST['Name'];
$email =$_REQUEST['Email'];
$subject =$_REQUEST['Subject'];
$msg =$_REQUEST['Message'];



echo '<div style="padding:0 50px">
<p>Name: '.$name.'</p>
<p>Email: '.$email.'</p>
<p>Subject: '.$subject.'</p>
<p>Message: '.$msg.'</p>
<br>
<p>We will get back to you soon!</p>
</div>';
?>