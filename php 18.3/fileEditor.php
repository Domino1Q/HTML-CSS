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
if (!isset($_GET["file"])) {
   die("Soubor nebyl vybrán.");
}
$file = basename($_GET["file"]);
$path = $dir . "/" . $file;

if (isset($_POST["save"])) {
   $handle = fopen($path, "w");
   fwrite($handle, $_POST["content"]);
   fclose($handle);
}

$content = "";
if (file_exists($path)) {
   $handle = fopen($path, "r");
   $content = fread($handle, filesize($path));
   fclose($handle);
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Editor - <?php echo $file; ?></title>
</head>
<body>
<h2>Editor: <?php echo $file; ?></h2>
<form method="post">
<textarea name="content" rows="20" cols="80"><?php
       echo htmlspecialchars($content);
   ?></textarea>
<br><br>
<button name="save">Uložit</button>
</form>
<br>
<a href="index.php">← zpět</a>
</body>
</html>
</body>
</html>
</body>
</html>