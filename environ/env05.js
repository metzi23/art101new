//declaring an array with name nextEpisode
let nextEpisode = {
    title: "On the next episode of Jerry's Adventures...",
    teaser: "Jerry finds himself face to face with a sabertooth tiger and uncharted territory"
};

//append the box to the bottom of page (after everything on top)
$(document).ready( function() {
    $(".yellow").append (`
        <div id="nextEpisode">
            <h3>${nextEpisode.title}</h3>
            <p>${nextEpisode.teaser}</p>
            <button id="nextBtn"> Go to Next Epsiode</button>
        </div>
    `);
  
    // NEXT EPISODE BUTTON HOVER
$("#nextBtn").hover(
  function() {
    $(this).css({
      "background-color": "#a14d4dff",
      "color": "#fff"
    });
  },
  function() {
    $(this).css({
      "background-color": "#d4d5d1ff",
      "color": "#000"
    });
  }
);
   
    $("#nextBtn").click (function () {
    window.location.href = "env05_2.html"
    });
    });



const myAudio = document.getElementById ('characteraudio');
myAudio.loop = true;

$("#cartoonbtn").click(function () {
if (myAudio.paused) {
    myAudio.play ();
    $(this).html("~Stop Music~");
} else {
    myAudio.pause();
    $(this).html("Press me");
}
});

// AUDIO BUTTON HOVER
$("#cartoonbtn").hover(
  function() {
    // mouse enters
    $(this).css({
      "background-color": "#ffecbf"
    });
  },
  function() {
    $(this).css({
      "background-color": "#efeee8"
    });
  }
);


