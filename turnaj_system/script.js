document.addEventListener("DOMContentLoaded", () => {

    loadTeams();
    loadMatches();

});

/* DARK MODE */

function toggleTheme() {

    document.body.classList.toggle("dark");

}

/* PŘIDÁNÍ TÝMU */

function addTeam() {

    const input = document.getElementById("teamInput");

    const name = input.value.trim();

    if (name === "") return;

    const formData = new FormData();

    formData.append("name", name);

    fetch("api/add_team.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(() => {

        input.value = "";

        loadTeams();

    })
    .catch(error => {

        console.error(error);

    });

}

/* NAČTENÍ TÝMŮ */

function loadTeams() {

    fetch("api/get_teams.php")
    .then(response => response.json())
    .then(data => {

        const teamsDiv = document.getElementById("teams");

        teamsDiv.innerHTML = "";

        data.forEach(team => {

            teamsDiv.innerHTML += `

                <div class="team-card">
                    👥 ${team.name}
                </div>

            `;

        });

        generateBracket(data);

    })
    .catch(error => {

        console.error(error);

    });

}

/* GENEROVÁNÍ ZÁPASŮ */

function generateMatches() {

    fetch("api/get_teams.php")
    .then(response => response.json())
    .then(teams => {

        if (teams.length < 2) {

            alert("Přidej alespoň 2 týmy");

            return;

        }

        const requests = [];

        for (let i = 0; i < teams.length; i++) {

            for (let j = i + 1; j < teams.length; j++) {

                const formData = new FormData();

                formData.append("team1", teams[i].id);
                formData.append("team2", teams[j].id);
                formData.append("round", "Skupina");

                requests.push(

                    fetch("api/add_match.php", {
                        method: "POST",
                        body: formData
                    })

                );

            }

        }

        Promise.all(requests)
        .then(() => {

            loadMatches();

        });

    })
    .catch(error => {

        console.error(error);

    });

}

/* NAČTENÍ ZÁPASŮ */

function loadMatches() {

    fetch("api/get_matches.php")
    .then(response => response.json())
    .then(matches => {

        const matchesDiv = document.getElementById("matches");

        matchesDiv.innerHTML = "";

        matches.forEach(match => {

            matchesDiv.innerHTML += `

                <div class="match">

                    <span>${match.team1}</span>

                    <div class="score-box">

                        <input
                            type="number"
                            id="s1_${match.id}"
                            value="${match.score1}"
                            min="0"
                        >

                        :

                        <input
                            type="number"
                            id="s2_${match.id}"
                            value="${match.score2}"
                            min="0"
                        >

                    </div>

                    <span>${match.team2}</span>

                    <button onclick="saveResult(${match.id})">
                        Uložit
                    </button>

                </div>

            `;

        });

    })
    .catch(error => {

        console.error(error);

    });

}

/* ULOŽENÍ VÝSLEDKU */

function saveResult(id) {

    const score1 = document.getElementById(`s1_${id}`).value;
    const score2 = document.getElementById(`s2_${id}`).value;

    const formData = new FormData();

    formData.append("id", id);
    formData.append("score1", score1);
    formData.append("score2", score2);

    fetch("api/save_result.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(() => {

        loadMatches();
        loadTeams();

    })
    .catch(error => {

        console.error(error);

    });

}

/* PLAYOFF */

function generateBracket(teams) {

    const bracket = document.getElementById("bracket");

    if (!bracket) return;

    bracket.innerHTML = "";

    if (teams.length < 4) {

        bracket.innerHTML = `
            <p>Pro playoff potřebuješ alespoň 4 týmy.</p>
        `;

        return;

    }

    const html = `

        <div class="round">

            <h3>Semifinále</h3>

            <div class="team winner">
                <span>${teams[0].name}</span>
                <span>3</span>
            </div>

            <div class="team">
                <span>${teams[3].name}</span>
                <span>1</span>
            </div>

            <br>

            <div class="team winner">
                <span>${teams[1].name}</span>
                <span>2</span>
            </div>

            <div class="team">
                <span>${teams[2].name}</span>
                <span>0</span>
            </div>

        </div>

        <div class="round">

            <h3>Finále</h3>

            <div class="team winner">
                <span>${teams[0].name}</span>
                <span>2</span>
            </div>

            <div class="team">
                <span>${teams[1].name}</span>
                <span>1</span>
            </div>

        </div>

        <div class="winner-box">

            <div>

                🏆
                <h2>${teams[0].name}</h2>
                <p>Vítěz turnaje</p>

            </div>

        </div>

    `;

    bracket.innerHTML = html;

}