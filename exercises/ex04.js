
let count = 0;
let colorCount=0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; //new line to add

$("#needy-button").click( function() {
   
  if (count <5) {mood ="fresh and happy" ; }
  else if ( (count > 5) && (count <10 )) {mood="keep pushing"; }
  else {mood = "so tired" ; }
   
    $("#needy-button").html( "Clicks: " + count + "Color: " + colors[colorCount] + " " + mood );

    $("body").css("background-color", colors[colorCount]);


    $("body").append("<img wdth=50 src= 'images/orchid.png' >");
    
    count = count + 1;
    colorCount = colorCount + 1;

    if (colorCount==4) {count=0;}
});



