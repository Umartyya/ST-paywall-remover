var div1 = document.getElementsByClassName("modal-backdrop");
var div2 = document.getElementsByClassName("paywall-hard-modal");
var div3 = document.getElementsByClassName("paywall-fixed-popup");

for(var i = 0; i < div1.length; i++) {
  var el = div1[i];
  el.parentNode.removeChild(el);
}

for(var i = 0; i < div2.length; i++) {
  var el = div1[i];
  el.parentNode.removeChild(el);
}

for(var i = 0; i < div3.length; i++) {
  var el = div1[i];
  el.parentNode.removeChild(el);
}

