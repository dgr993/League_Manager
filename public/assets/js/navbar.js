


function getTeams() {
    $.get("/api/teams", function (data) {
        data.map(team => {
            $("#teamDrop").append(
                [
                    "<li>",
                    team.teamName,
                    "<button id=team" + team.id + " type='button' class='btn'>❌</button>",
                    "</li>"
                ]
            )

        })
    });
}








function getPlayers() {
    $.get("/api/players", function (data) {
        data.map(player => {
            $("#playersDrop").append(
                [
                    "<li >",
                    player.playerName,
                    "<button  id=player" + player.id + " type='button' class='btn btn - danger'>❌</button>",
                    "</li>"
                ]
            )

        })
    });
}

function getLeagues() {
    $.get("/api/leagues", function (data) {
        console.log(data)
        data.map(league => {
            $("#leaguesDrop").append(
                [
                    "<li>",
                    league.leagueName,
                    "<button  id=league" + league.id + " type='button' class='btn btn - danger'>❌</button>",
                    "</li>"
                ]
            )

        })
    });
}

getPlayers()
getTeams()
getLeagues()