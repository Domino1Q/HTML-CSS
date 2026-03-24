let teams = [];
let matches = [];
let finalists = [];
// TÝMY
function addTeam() {
   const input = document.getElementById("teamInput");
   if (!input.value.trim()) return;
   teams.push({
       name: input.value,
       pts: 0, gf: 0, ga: 0, z: 0
   });
   input.value = "";
   renderTeams();
   save();
}
function removeTeam(i) {
   teams.splice(i, 1);
   renderTeams();
   save();
}
function renderTeams() {
   const list = document.getElementById("teamList");
   list.innerHTML = "";
   teams.forEach((t, i) => {
       list.innerHTML += `
<li>${t.name}
<button onclick="removeTeam(${i})">❌</button>
</li>`;
   });
}
// ZÁPASY
function generateMatches() {
   matches = [];
   resetStats();
   for (let i = 0; i < teams.length; i++) {
       for (let j = i + 1; j < teams.length; j++) {
           matches.push({ a: teams[i].name, b: teams[j].name, sa:"", sb:"" });
       }
   }
   renderMatches();
   save();
}
function renderMatches() {
   const div = document.getElementById("matches");
   div.innerHTML = "";
   matches.forEach((m, i) => {
       div.innerHTML += `
<div class="match">
           ${m.a}
<input type="number" onchange="setScore(${i},'a',this.value)">
           :
<input type="number" onchange="setScore(${i},'b',this.value)">
           ${m.b}
<b>${m.sa!==""?m.sa:"-"}:${m.sb!==""?m.sb:"-"}</b>
</div>`;
   });
}
function setScore(i, t, val) {
   if (t === "a") matches[i].sa = Number(val);
   else matches[i].sb = Number(val);
   updateTable();
   save();
}
// TABULKA
function resetStats() {
   teams.forEach(t => {
       t.pts = t.gf = t.ga = t.z = 0;
   });
}
function updateTable() {
   resetStats();
   matches.forEach(m => {
       if (m.sa === "" || m.sb === "") return;
       let a = teams.find(t => t.name === m.a);
       let b = teams.find(t => t.name === m.b);
       a.z++; b.z++;
       a.gf += m.sa; a.ga += m.sb;
       b.gf += m.sb; b.ga += m.sa;
       if (m.sa > m.sb) a.pts += 3;
       else if (m.sa < m.sb) b.pts += 3;
       else { a.pts++; b.pts++; }
   });
   teams.sort((a,b)=> b.pts - a.pts || (b.gf-b.ga)-(a.gf-a.ga));
   renderTable();
   generateFinal();
}
function renderTable() {
   const table = document.getElementById("table");
   table.innerHTML = "";
   teams.forEach((t,i)=>{
       table.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${t.name}</td>
<td>${t.z}</td>
<td>${t.gf}:${t.ga}</td>
<td>${t.pts}</td>
</tr>`;
   });
}
// FINÁLE
function generateFinal() {
   if (teams.length < 2) return;
   finalists = [teams[0], teams[1]];
   const div = document.getElementById("final");
   div.innerHTML = `
   ${finalists[0].name}
<input type="number" onchange="setFinal(0,this.value)">
   :
<input type="number" onchange="setFinal(1,this.value)">
   ${finalists[1].name}
<div id="winner"></div>
   `;
}
function setFinal(team, val) {
   if (!finalists.length) return;
   if (!finalists[0].score) finalists[0].score = "";
   if (!finalists[1].score) finalists[1].score = "";
   finalists[team].score = Number(val);
   if (finalists[0].score !== "" && finalists[1].score !== "") {
       let w = finalists[0].score > finalists[1].score
           ? finalists[0].name
           : finalists[1].name;
       document.getElementById("winner").innerHTML =
           `<h3 class="winner">Vítěz: ${w}</h3>`;
   }
   save();
}
// DARK MODE
function toggleTheme() {
   document.body.classList.toggle("dark");
   localStorage.setItem("theme", document.body.classList.contains("dark"));
}
// RESET
function resetAll() {
   if (!confirm("Smazat vše?")) return;
   teams = [];
   matches = [];
   localStorage.clear();
   location.reload();
}
// SAVE / LOAD
function save() {
   localStorage.setItem("data", JSON.stringify({teams, matches, finalists}));
}
function load() {
   const d = JSON.parse(localStorage.getItem("data"));
   if (!d) return;
   teams = d.teams || [];
   matches = d.matches || [];
   finalists = d.finalists || [];
   renderTeams();
   renderMatches();
   updateTable();
}
// INIT
if (localStorage.getItem("theme") === "true") {
   document.body.classList.add("dark");
}
load();