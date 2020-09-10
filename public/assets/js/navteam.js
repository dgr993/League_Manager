$(document).ready(() => {
    const createNew = $("form.player");
    const playerInput = $("#name-input");
  


       function createNewPlayer(playerName, playerAge) {
        $.get("/api/players", {
            playerName: playerName,
            playerAge: playerAge
        })