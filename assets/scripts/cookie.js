
if (Cookies.get('user') == null) {
  Cookies.set('user', 'retunring', { expires: 7 });
} else {
  var parent = document.getElementById("body");
  var child = document.getElementById("overlay");
  parent.removeChild(child);
}
