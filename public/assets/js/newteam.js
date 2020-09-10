$(document).ready(() => {
    // Getting references to our form and input
    const createNew = $("form.team");
    const teamInput = $("#team-input");
    const coachInput = $("#coach-input");

    // When the create button is clicked, we validate the email and password are not blank
    createNew.on("submit", event => {
        event.preventDefault();
        const userData = {
            teamName: teamInput.val().trim(),
            coach: coachInput.val().trim(),
        };
        console.log(userData);
        if (!userData.teamName || !userData.teamCoach) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        createNewTeam(userData.teamName, userData.teamCoach);
        teamInput.val("");
        coachInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createNewTeam(teamName, teamCoach) {
        $.post("/api/teams", {
            teamName: teamName,
            teamCoach: teamCoach
        })
            .then(() => {
                window.location.replace("/teams");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(err => {
                console.log(err);
            });
    }
});
