$(document).on("click", "btn btn-primary", getTeams);


function getTeams() {
    $.get("/api/teams", function (data) {
        todos = data;
        initializeRows();
    });
}

function initializeRows() {
    $teamContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
    }
    $todoContainer.prepend(rowsToAdd);
}
