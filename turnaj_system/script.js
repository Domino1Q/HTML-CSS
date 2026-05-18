loadTeams();

function addTeam() {

    const input = document.getElementById("teamInput");

    const formData = new FormData();
    formData.append("name", input.value);

    fetch("api/add_team.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(() => {

        input.value = "";
        loadTeams();

    });
}

function loadTeams() {

    fetch("api/get_teams.php")
    .then(res => res.json())
    .then(data => {

        const div = document.getElementById("teams");

        div.innerHTML = "";

        data.forEach(team => {

            div.innerHTML += `
                <div class="team">
                    ${team.name}
                </div>
            `;
        });

    });
}