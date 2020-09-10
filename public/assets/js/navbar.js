function getTeams() {
    $.get("/api/teams", function (data) {
        //        teams = data;
        //        initializeRows();
        data.map(team => {
            $("#teamDrop").append(
                
                    `<li><a href=teams/${team.id}>${team.teamName}</a></li>`
                
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
                
                    `<li><a href=teams/${player.id}>${player.playerName}</a></li>`
                
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
                
                    `<li><a href=teams/${league.id}>${league.leagueName}</a></li>`
                
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