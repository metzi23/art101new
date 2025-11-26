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
  
    $("#nextBtn").hover(
    function() {
        $(this).css({
      "background-color": "#a14d4dff"
    });
},
    function() {
        $(this).css({
      "background-color": "#deddd7ff"
    });
    }
);
    $("#nextBtn").click (function () {
    window.location.href = "env06_2.html"
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

$("#cartoonbtn").hover(
  function() {
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

function loopTigerPounce() {
  $("#tiger2").css({ left: "-60px" });
  $("#tiger2").animate(
    {
      left: "400px",
    },
    {
      duration: 6000,
      easing: "swing",
      complete: function () {
        $("#tiger2")
          .animate({ left: "580px" }, 100)
          .animate({ left: "600px" }, 100, function () {
            setTimeout(loopTigerPounce, 800);
          });
      }
    }
  );
}

loopTigerPounce();
let jerryFollow = false;
let reacted = false;

$(document).mousemove(function(event) {
  if (jerryFollow) {
    $("#jerry2").css({
      left: event.pageX - 60,
      top: event.pageY - 60
    });
    
    let jPos = $("#jerry2").position();
      $("#output").css({
        left: jPos.left + 70,  
        top: jPos.top - 10
      });

    if(!reacted) {
      $("#output").html("Jerry: Whoa! Careful");
      reacted = true;
    }
  }
});

$(document).click(function() {
  jerryFollow = !jerryFollow;
  reacted = false;
});

$(document).ready(function () {

    let hour = new Date().getHours();

    if (hour >= 18 || hour < 6) {
        $("body").addClass("night-mode");
    } else {
        $("body").addClass("day-mode");
    }

});
