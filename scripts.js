// make things movable
$( function() {
    // desktop icons
    $( "#resume" ).draggable();
    $( "#oit" ).draggable();
    $( "#projects" ).draggable();
    // windows
    $( "#text_editor" ).draggable();
    $( "#resume_window" ).draggable();
    // work
    // projects
    $( "#ramblin" ).draggable();
} );

// clock
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

// opening and closing windows
function open_window(idname) {
    document.getElementById(idname).style.top = "15px";
}

function close_window(idname) {
    document.getElementById(idname).style.top = "1500px";
}
