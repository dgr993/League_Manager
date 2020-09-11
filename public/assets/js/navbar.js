


function getTeams() {
    $.get("/api/teams", function (data) {
        //        teams = data;
        //        initializeRows();
        data.map(team => {
            $("#teamDrop").append(
                [
                    "<li>",
                    team.teamName,
                    "<button type='button' class='btn btn - danger'> X </button>",
                    "</li>"
                ]
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
                [
                    "<li>",
                    player.playerName,
                    "</li>"
                ]
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
                [
                    "<li>",
                    league.leagueName,
                    "</li>"
                ]
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