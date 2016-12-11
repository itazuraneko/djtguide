if(checkCookie() == true) {
	nightMode();
}
var div = document.createElement('div');
div.innerHTML = '☽';
div.id = 'night';
div.title = 'night mode';
document.body.appendChild(div);
div.onclick = toggleNight;

function toggleNight() {
	if(checkCookie() == false) {
		nightMode();
	} else {
		document.getElementsByTagName('head')[0].removeChild(document.getElementById('nightcss'));
		setCookie('0');
	}
}

function nightMode() {
	link = document.createElement('link');
	link.href = 'style/night.css';
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.id = 'nightcss';
	document.getElementsByTagName('head')[0].appendChild(link);
	setCookie('1');
}

function checkCookie() {
	var name = 'night=';
	var ca = document.cookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			if(c.substring(name.length,c.length) === '1') {
				return true;
			}
		}
	}
	return false;
}

function setCookie(val) {
	document.cookie = "night=" + val + "; expires=Thu, 18 Dec 2044 12:00:00 UTC";
}
		

