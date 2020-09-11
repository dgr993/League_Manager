


function getTeams() {
    $.get("/api/teams", function (data) {
        //        teams = data;
        //        initializeRows();
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
        //        teams = data;
        //        initializeRows();
        data.map(player => {
            $("#playersDrop").append(
                
                    `<li><a href=/players/${player.id}>${player.playerName}</a></li>`
                
            )

        })
    });
}

function getLeagues() {
    $.get("/api/leagues", function (data) {
        console.log(data)
        //        teams = data;
        //        initializeRows();
        data.map(league => {
            $("#leaguesDrop").append(
                
                    `<li><a href=/leagues/${league.id}>${league.leagueName}</a></li>`
                
            )

        })
    });
}
//
//function initializeRows() {
//    $teamsContainer.empty();
//    var rowsToAdd = [];
//    for (var i = 0; i < teams.length; i++) {
//        rowsToAdd.push(createNewRow(todos[i]));
//    }
//    $teamsContainer.prepend(rowsToAdd);
//
//
//
//}
//
//function createNewRow(todo) {
//    var $newInputRow = $(
//        [
//            "<div class= 'card'> hi ",
//            teams.text,
//            "</div>"
//        ].join("")
//    )
//}
//
getPlayers()
getTeams()
getLeagues()