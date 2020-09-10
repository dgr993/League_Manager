$(document).ready(() => {
    const createNew = $("form.player");
    const playerInput = $("#name-input");
  


       function createNewPlayer(playerName, playerAge) {
        $.get("/api/players", {
            playerName: playerName,
            playerAge: playerAge
        })

        router.get("/burgers", function(_req_, _res_) {
 // express callback response by calling burger.selectAllBurger
 burger.all(function(_burgerData_) {
   // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
   _res_.render("index", { burger_data: _burgerData_ });
 });
});