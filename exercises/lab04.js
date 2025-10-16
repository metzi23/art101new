//declaring an array with name myCommutes
let myCommutes = ["metro bus", "loop bus", "uber", "rental bike", "friends"];

//declaring an object with name myFavoriteCommute
let myFavoriteCommute = {
    type: "Bus",
    route: 11,
    print: "Butterflies",
    hasMiddleDoor: true,
    driver: ["guy that is old"],
}

let megaSentence;

megaSentence =  "<p> My two top commutes from the array are: " + myCommutes[0] +", " + myCommutes [4] + "</p>";

megaSentence = megaSentence + "<p>My favorite commute possesses such characteristics : type - " + myFavoriteCommute.type + ", route number " + myFavoriteCommute.route + ", the best driver: " + myFavoriteCommute.driver[0] + "</p>";

$("#output").html(megaSentence);