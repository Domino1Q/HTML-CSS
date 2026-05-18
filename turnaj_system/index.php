<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="UTF-8">
<title>Turnaj PRO</title>

<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="sidebar">
    <h2>Turnaj PRO</h2>
</div>

<div class="main">

<div class="card">
    <h1>Správa týmů</h1>

    <div class="row">
        <input type="text" id="teamInput" placeholder="Název týmu">
        <button onclick="addTeam()">Přidat</button>
    </div>

    <div id="teams"></div>
</div>

</div>

<script src="script.js"></script>
</body>
</html>