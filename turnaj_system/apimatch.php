<?php
include("../config/db.php");

$team1 = $_POST['team1'];
$team2 = $_POST['team2'];
$round = $_POST['round'];

$sql = "INSERT INTO matches(team1_id, team2_id, round_name)
VALUES('$team1','$team2','$round')";

mysqli_query($conn, $sql);
?>