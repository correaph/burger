// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    //Add burger submit event
    $(".add-burger").on("submit", function(event) {
        var burgerName = $("#burger_name").val().trim();
        if (!burgerName) {
            alert("Burger name cannot be empty!");
            return;
        }
        // Prevent default on a submit event.
        event.preventDefault();
        var newBurger = {
            burger_name: burgerName,
        };
        // Send the POST request.
        $.ajax("/api/burger/insertOne", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated list
            location.reload();
        });
    });
    //Update devoured flag to YES
    $(".change-devoured").on("click", function(event) {
        var newDevoured = {
            id: $(this).data("id")
        };
        // Send the PUT request.
        $.ajax("/api/burger/updateAsDevoured", {
            type: "PUT",
            data: newDevoured
        }).then(function() {
            console.log("changed devoured flag to YES");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});