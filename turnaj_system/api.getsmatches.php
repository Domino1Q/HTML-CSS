<?php
include("../config/db.php");

$sql = "SELECT
matches.id,
team1.name AS team1,
team2.name AS team2,
score1,
score2,
round_name

FROM matches

JOIN teams AS team1 ON matches.team1_id = team1.id
JOIN teams AS team2 ON matches.team2_id = team2.id";

$result = mysqli_query($conn, $sql);

$data = [];

while($row = mysqli_fetch_assoc($result)){
    $data[] = $row;
}

echo json_encode($data);
?>