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
