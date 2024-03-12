<?php
 $path = '/results.txt';
 if (isset($_POST['name']) && isset($_POST['join'])) {
    $fh = fopen($path,"a+");
    $string = $_POST['name'].' - '.$_POST['join'];
    fwrite($fh,$string); // Write information to the file
    fclose($fh); // Close the file
 }
?>