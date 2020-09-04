$(document).ready(() => {
    // Getting references to our form and input
    const createNew = $("form.create_new");
    const playerInput = $("input#player-input");
    const ageInput = $("input#age-input");

    // When the create button is clicked, we validate the email and password are not blank
    createNew.on("submit", event => {
        event.preventDefault();
        const userData = {
            player: playerInput.val().trim(),
            age: ageInput.val().trim()
        };
        console.log(userData);
        if (!userData.player || !userData.age) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        createNewPlayer(userData.player, userData.age);
        playerInput.val("");
        ageInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewPlayer(player, age) {
        $.post("/api/new", {
            player: player,
            age: age
        })
            .then(() => {
                window.location.replace("/createplayer");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
