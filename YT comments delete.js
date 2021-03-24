// www.youtube.com/feed/history/comment_history

a = function() {
var del_btns = document.querySelector('[aria-label="Delete activity item"]');
del_btns.click();
}
b = function() {
var menu_btns = document.querySelector('[aria-label="Open activity options menu"]');
menu_btns.click();
}

var i = 1000;

f = function() {

if (i >= 0) setTimeout(b, 200);
if (i >= 0) setTimeout(a, 800);

i -= 1;
if (i == 0)
return;

if (i > 0)
setTimeout(f, 1200);
}

f();
//============================================================================


a = function() {
var del_btns = document.querySelector('[aria-label="Delete activity item"]');
del_btns.click();
}


var i = 1000;
while (i>0) {
	setTimeout(a, 1100);
	i--;
}


//============================


a = function() {
var del_btns = document.querySelector('[aria-label="Delete activity item"]');
del_btns.click();
setTimeout(1200);
}
b = function() {
var menu_btns = document.querySelector('[aria-label="Open activity options menu"]');
menu_btns.click();
setTimeout(1200);
}


f = function() {

setTimeout(b, 1200);
setTimeout(a, 1200);
}


while (true) {
  setTimeout(f(),2500);
}
