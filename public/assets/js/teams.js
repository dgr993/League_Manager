$(document).on("click", "btn btn-primary", getTeams);



function getTeams() {
    console.log("working")
    $.get("/api/teams", function (data) {
        teams = data;
        initializeRows();
    });
}

function initializeRows() {
    $teamsContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < teams.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
    }
    $teamsContainer.prepend(rowsToAdd);



}

function createNewRow(todo) {
    var $newInputRow = $(
        [
            "<div class= 'card'> hi ",
            teams.text,
            "</div>"
        ].join("")
    )
}