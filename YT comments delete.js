a = function() {
var del_btns = document.querySelector('[aria-label="Delete activity item"]');
del_btns.click();
setTimeout(1500)
}
b = function() {
var menu_btns = document.querySelector('[aria-label="Open activity options menu"]');
menu_btns.click();
setTimeout(1500)
}

var i = 0;

f = function() {

var menu_btns_lenght = document.querySelectorAll('[aria-label="Open activity options menu"]').length;

if (i >= 0) setTimeout(b, 1200);
if (i >= 0) setTimeout(a, 1200);

i += 1;
if (i >= menu_btns_lenght)
return;

if (i > 0)
setTimeout(f, 1200);
}

f();