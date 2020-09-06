$(document).ready(() => {
    // Getting references to our form and input
    const createNew = $("form.create_new");
    const teamInput = $("input#team-input");
    const coachInput = $("input#coach-input");

    // When the create button is clicked, we validate the email and password are not blank
    createNew.on("submit", event => {
        event.preventDefault();
        const userData = {
            team: teamInput.val().trim(),
            coach: coachInput.val().trim()
        };

        if (!userData.team || !userData.coach) {
            return;
        }
        // If we have an email and password, run the signUpUser function
<<<<<<< HEAD
        createNewPlayer(userData.playerName, userData.playerAge);
        playerInput.val("");
        ageInput.val("");
=======
        createPlayer(userData.team, userData.coach);
        teamInput.val("");
        coachInput.val("");
>>>>>>> master
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createPlayer(team, coach) {
        $.post("/api/new", {
            team: team,
            coach: coach
        })
            .then(() => {
                window.location.replace("/leagues");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
