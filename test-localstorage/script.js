// CONCEPTS: Getting from DOM, saving/loading from localstorage
// converting localstorage string into an array
// an array of objects

var field = document.querySelector("#test-field")
var btn = document.querySelector("#test-btn")
var output = document.querySelector("#output")


// - LOADING - //
// As soon as you load the webpage, see if there's localStorage information
// var text = localStorageInitial;
var jsonText = localStorage.getItem("initials")// var localStorageInitial = text;
console.log(jsonText);
console.log(typeof jsonText);

var players = []
if(jsonText) {
    var players = JSON.parse(jsonText); // change localstorage string into an array
    for(var i=0; i<players.length; i++) {
        // You would do HTML for object.player and object.score
        output.append(players[i] + "  "); // output.textContent = output.textContent + players[i]
    }
}

// - SAVING - //

// Fake timer
var timer_value = 20

btn.addEventListener("click", ()=>{
    var text = field.value; // user typed
    // NEXT
    var object = {
        player: text,
        score: timer_value // replace with timer.value once you have countdown timer worked out
    }

    // Get the original leaderboard
    var jsonText = localStorage.getItem("initials")// var localStorageInitial = text
    var players = []
    if(jsonText) {
        // It was saved as a string. We need an array
        players = JSON.parse(jsonText);
    }

    // TODO: you would players.push(object)
    players.push(text) // Adds to the array. [1,2,3] pushing 4 => [1,2,3,4]
                        // Or adds to empty array [] pushing 1 => [1]

    localStorage.setItem("initials", JSON.stringify(players))// var localStorageInitial = text;
    output.textContent = ""
    for(var i=0; i<players.length; i++) {
        // You would do HTML for object.player and object.score
        output.append(players[i] + "  "); // output.textContent = output.textContent + players[i]
    }
})