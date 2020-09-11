


function getTeams() {
    $.get("/api/teams", function (data) {
        data.map(team => {
            $("#teamDrop").append(
<<<<<<< HEAD
                [
                    "<li>",
                    team.teamName,
                    "<button type='button' class='btn btn - danger'> X </button>",
                    "</li>"
                ]
=======
                
                    `<li><a href=teams/${team.id}>${team.teamName}</a></li>`
               
                    //"<button type='button' class='btn btn - danger'>Danger</button>",
                    
                


>>>>>>> master
            )

        })
    });
}








function getPlayers() {
    $.get("/api/players", function (data) {
        data.map(player => {
            $("#playersDrop").append(

                    `<li><a href=teams/${player.id}>${player.playerName}</a></li>`
                

            )

        })
    });
}

function getLeagues() {
    $.get("/api/leagues", function (data) {
        console.log(data)
        data.map(league => {
            $("#leaguesDrop").append(

 
                    `<li><a href=teams/${league.id}>${league.leagueName}</a></li>`
                

            )

        })
    });
}

getPlayers()
getTeams()
getLeagues()