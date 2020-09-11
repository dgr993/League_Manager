


function getTeams() {
    $.get("/api/teams", function (data) {
        data.map(team => {
            $("#teamDrop").append(
                
<<<<<<< HEAD
                    `<li><a href=/teams/${team.id}>${team.teamName}</a></li>`
=======
                    `<li><a href=teams/${team.id}>${team.teamName}</a></li>`
               
                    //"<button type='button' class='btn btn - danger'>Danger</button>",
                    
>>>>>>> fe34f5fec44dd2735f420ba75913e05e37edf043
                


            )

        })
    });
}








function getPlayers() {
    $.get("/api/players", function (data) {
        data.map(player => {
            $("#playersDrop").append(
<<<<<<< HEAD
                
                    `<li><a href=/players/${player.id}>${player.playerName}</a></li>`
=======

                    `<li><a href=teams/${player.id}>${player.playerName}</a></li>`
>>>>>>> master
                

            )

        })
    });
}

function getLeagues() {
    $.get("/api/leagues", function (data) {
        console.log(data)
        data.map(league => {
            $("#leaguesDrop").append(
<<<<<<< HEAD
                
                    `<li><a href=/leagues/${league.id}>${league.leagueName}</a></li>`
=======

 
                    `<li><a href=teams/${league.id}>${league.leagueName}</a></li>`
>>>>>>> master
                

            )

        })
    });
}

getPlayers()
getTeams()
getLeagues()