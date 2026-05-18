<?php
include("../config/db.php");

$name = $_POST["name"];

$sql = "INSERT INTO teams(name) VALUES('$name')";

mysqli_query($conn, $sql);

echo "OK";
?>