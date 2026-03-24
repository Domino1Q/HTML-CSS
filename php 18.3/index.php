<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$dir = "files";

if (!file_exists($dir)) {
   mkdir($dir);
}

if (isset($_POST["newFile"])) {
   $name = basename($_POST["filename"]);
   $file = $dir . "/" . $name . ".txt";
   fopen($file, "w"); 
   header("Location: index.php");
}

if (isset($_GET["delete"])) {
   unlink($dir . "/" . $_GET["delete"]);
   header("Location: index.php");
}
$files = scandir($dir);
?>
<!DOCTYPE html>
<html>
<head>
<title>PHP Text Editor</title>
</head>
<body>
<h2>Soubory</h2>
<ul>
<?php
foreach ($files as $file) {
   if ($file != "." && $file != "..") {
       echo "<li>
           $file
<a href='fileEditor.php?file=$file'>Otevřít</a>
<a href='?delete=$file'>Smazat</a>
</li>";
   }
}
?>
</ul>
<h3>Nový soubor</h3>
<form method="post">
<input type="text" name="filename" required>
<button name="newFile">Vytvořit</button>
</form>
</body>
</html>
</body>
</html>