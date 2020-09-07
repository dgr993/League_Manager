$(document).ready(() => {
    // Getting references to our form and input
<<<<<<< HEAD
    const createNew = $("form.player");
    const playerNameInput = $("input#player-input");
    const playerAgeInput = $("input#age-input");
=======
    const createNew = $("form.create_new");
    const nameInput = $("input#name-input");
    const ageInput = $("input#age-input");
>>>>>>> master

    // When the create button is clicked, we validate the email and password are not blank
    createNew.on("submit", event => {
        event.preventDefault();
        const userData = {
<<<<<<< HEAD
            playerName: playerNameInput.val().trim(),
            playerAge: playerAgeInput.val().trim()
        };
        console.log(userData);
        if (!userData.playerName || !userData.playerAge) {
=======
            name: nameInput.val().trim(),
            age: ageInput.val().trim()
        };

        if (!userData.name || !userData.age) {
>>>>>>> master
            return;
        }
        // If we have an email and password, run the signUpUser function
        createNewPlayer(userData.playerName, userData.playerAge);
<<<<<<< HEAD
        playerNameInput.val("");
        playerAgeInput.val("");
=======
        playerInput.val("");
        ageInput.val("");
>>>>>>> master
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewPlayer(playerName, playerAge) {
        $.post("/api/new", {
            playerName: playerName,
            playerAge: playerAge
        })
            .then(() => {
                window.location.replace("/players");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
