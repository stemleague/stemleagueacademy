$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
       $(".header").removeClass("active");
    }
});
//paste this code under the head tag or in a separate js file.
// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $("#CohortB").css("display", "none");
  $("#CohortC").css("display", "none");
});

var off = '#d2d2d2';
var on = 'white';

function changeColor(n) {
  if (n == 1) {
    document.getElementById('lessons').style.color = on;
    document.getElementById('details').style.color = off;

    document.getElementById('lessons-info').style.display = 'block';
    document.getElementById('details-info').style.display = 'none';
  } else {
    document.getElementById('details').style.color = on;
    document.getElementById('lessons').style.color = off;
    document.getElementById('details-info').style.display = 'block';
    document.getElementById('lessons-info').style.display = 'none';
  }
}


function changeColors(n) {
  if (n == 1) {
    document.getElementById('lessons').style.color = on;
    document.getElementById('details').style.color = off;
    document.getElementById('all').style.color = off;
    document.getElementById('lessons-info').style.display = 'block';
    document.getElementById('details-info').style.display = 'none';
    document.getElementById('all-info').style.display = 'none';
  } else if (n == 2) {
    document.getElementById('details').style.color = on;
    document.getElementById('lessons').style.color = off;
    document.getElementById('all').style.color = off;
    document.getElementById('details-info').style.display = 'block';
    document.getElementById('lessons-info').style.display = 'none';
    document.getElementById('all-info').style.display = 'none';
  } else if (n > 3) {
    document.getElementById('lessons').style.color = off;
    document.getElementById('details').style.color = off;
    document.getElementById('all').style.color = on;
    document.getElementById('lessons-info').style.display = 'none';
    document.getElementById('details-info').style.display = 'none';
    document.getElementById('all-info').style.display = 'block';

    if (n == 4) {
      document.getElementById('pl').style.display = 'none';
      document.getElementById('desc').style.display = 'none';
      return;
    }
  }

  document.getElementById('pl').style.display = 'block';
  document.getElementById('desc').style.display = 'block';
}

  
function getClicked(x) {
  console.log(x);
  console.log(x.title);
  var target_title = x.title;

  document.getElementById('vid-info').style.display = 'none';
  document.getElementById('watch-video').style.display = 'block';
  document.getElementById(target_title).style.display = 'block';
  console.log(document.getElementById(target_title));
  for (var i = 0; i < videos.length; i++) {
    current_title = videos[i]
    if (current_title != target_title) {
      document.getElementById(current_title).style.display = 'none';
    }
  }
}

function clearAll() {
  console.log('clearing');
  for (var i = 0; i < videos.length; i++) {
    console.log(videos[i]);
    document.getElementById(videos[i]).style.display = 'none';
  }
  document.getElementById('watch-video').style.display = 'none';
  document.getElementById('vid-info').style.display = 'block';
  window.location.reload();
}

$(function(){
    $('.close').click(function(){
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});
