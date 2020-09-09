$(document).ready(() => {
    // Getting references to our form and input
    const createNew = $("form.league");
    const leagueInput = $("#league-name");
    const typeInput = $("#league-type");
    const ownerInput = $("#league-owner")

    // When the create button is clicked, we validate the email and password are not blank
    createNew.on("submit", event => {
        event.preventDefault();
        const userData = {
            leagueName: leagueInput.val().trim(),
            leagueType: typeInput.val().trim(),
            leagueOwner: ownerInput.val().trim()
        };
        console.log(userData);
        if (!userData.leagueName || !userData.leagueType || !userDate.leagueOwner) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        createNewLeague(userData.leagueName, userData.leagueType, userData.leagueOwner);
        leagueInput.val("");
        typeInput.val("");
        ownerInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewLeague(leagueName, leagueType, leagueOwner) {
        $.post("/api/leagues", {
            leagueName: leagueName,
            leagueType: leagueType,
            leagueOwner: leagueOwner
        })
            .then(() => {
                window.location.replace("/leagues");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(err => {
                console.log(err);
            });
    }
});
