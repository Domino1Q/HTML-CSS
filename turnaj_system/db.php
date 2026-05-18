<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "turnaj_system";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Chyba databáze");
}
?>