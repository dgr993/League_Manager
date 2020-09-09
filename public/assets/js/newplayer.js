$(document).ready(() => {
    // Getting references to our form and input
    const createNew = $("form.player");
    const playerInput = $("#name-input");
    const ageInput = $("#age-input");

    // When the create button is clicked, we validate the email and password are not blank
    createNew.on("submit", event => {
        event.preventDefault();
        const userData = {
            playerName: playerInput.val().trim(),
            playerAge: ageInput.val().trim()
        };
        console.log(userData);
        if (!userData.playerName || !userData.playerAge) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        createNewPlayer(userData.playerName, userData.playerAge);
        playerInput.val("");
        ageInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewPlayer(playerName, playerAge) {
        $.post("/api/players", {
            playerName: playerName,
            playerAge: playerAge
        })
            .then(() => {
                window.location.replace("/players");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
<<<<<<< HEAD:public/assets/js/create_new_player.js
            .catch(handleLoginErr);
    }
    
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
=======
            .catch(err => {
                console.log(err);
            });
>>>>>>> 70f3e86680965e237cd6d24f16aa912b8a8e7cf7:public/assets/js/newplayer.js
    }
});
