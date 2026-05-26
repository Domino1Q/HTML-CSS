<?php
include("../config/db.php");

$id = $_POST['id'];
$score1 = $_POST['score1'];
$score2 = $_POST['score2'];

$sql = "UPDATE matches
SET score1='$score1', score2='$score2'
WHERE id='$id'";

mysqli_query($conn, $sql);
?>