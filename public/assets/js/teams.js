function getTeams() {
    $.get("/api/todos", function (data) {
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
