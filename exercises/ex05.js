var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

function makeImage (imageName) {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='/artnew101/images/" +imageName + ".png'>");
   }
}

function chnageBackground (newColor) {
  $("body").css("background-color", newColor);
}
  


// the button part
$("#needy-button").click(function () {
   if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);

chnageBackground( colors[colorCount]);

   makeImage("Orchid"); 

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});

