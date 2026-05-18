<?php
include("../config/db.php");

$sql = "SELECT * FROM teams";

$result = mysqli_query($conn, $sql);

$teams = [];

while($row = mysqli_fetch_assoc($result)) {
    $teams[] = $row;
}

echo json_encode($teams);
?>