$(document).ready(function () {
    // Getting references to our form and input
    const createNew = $("form.create_new_player");
    const playerNameInput = $("input#player-input");
    const playerAgeInput = $("input#age-input");

    // When the create button is clicked, we validate the email and password are not blank
    createNew.on("submit", event => {
        event.preventDefault();
        const userData = {
            playerName: playerNameInput.val().trim(),
            playerAge: playerAgeInput.val().trim()
        };
        console.log(userData);
        if (!userData.playerName || !userData.playerAge) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        createNewPlayer(userData.playerName, userData.playerAge);
        playerNameInput.val("");
        playerAgeInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewPlayer(playerName, playerAge) {
        $.post("/api/newplayer", {
            playerName: playerName,
            playerAge: playerAge
        })
            .then(() => {
                window.location.replace("/createplayer");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
        // .catch(handleLoginErr);
    }

    // function handleLoginErr(err) {
    //     $("#alert .msg").text(err.responseJSON);
    //     $("#alert").fadeIn(500);
    // }
});
