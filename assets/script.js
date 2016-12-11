if(checkCookie() == true) {
	nightMode();
}
var div = document.createElement('div');
div.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFgUlEQVRoQ+1Xf1BUVRQ+9763IJkDGrtvFxTBJdCZCJVqHCplRG2MRExNR0Ud08Qyyv5orKaRpqLUrKQZFcnUCmxE0yZ18kf+CLBGmlJrRs3dt4vg7r7dBTTFNXffvd3dRAna2LdPdJzZ9w/DvnPO933nu/fc+xDc5Q+6y/lDRMCddjDiQMQBlR2ILCGVDVSdHnFAdQtVFrilDjwoCL1PStIVxomq5BVy+i0RkJwcF8dd1bzNUBcjCm+YJFdpyAxUBqoWkKqPz8Ec2irLoPVzoRSPFSXpgEpeIaerEpCq1z5DEKocnKbDiYmx+NAR02XTeSmOocvBGAwShAyM6XImeKnF6TwZMtMggWELYERyEaZ7s7MH4Y/KpqAlxdX0aI1Ya3a6Rv4fKWOCsAsIyQOMd5tt0lN3REBaQkI8Qd7T6WmGvp9XzsbRUTxMLij3ms3N1Sa7c2YwUqkG3SxK6RcDU1KgwWIBiugs0e6uVCMiLAeMgm5dVDResPPbRf6lE8CfmL/2mii2fGVxuOZ0JpSaoB0GBJVQoPnjxj9Jy8orUHHRc3Tfnt0BfCZqpii5q8IRolhAWv/7En0yZy1a+Bj//OKbq2Xu7M2+4780fWdyuCZ0EWDQ7WEkxyclJ8O+H+qA12jA5/XCmEdHQFNjYyDc7HAp5uLPU5w0SNAu5Xhceujwyyiub8wNrm+V7Iavdxy3ms+7UjoLSNHpMnlElxEEBTljxsKaDRvRonlzyZHvDyCEcTWivpKz9uZTt8cBg64u65HkERUbZuCOgDt3nIBlb+4CwHKS2dbyT1s7PUYhfjogtEXQG0By2Cnr3jTmWHU4xNtzlDqA79fHXylaPCp6YdHj/8JtabkCuTmrqSyT10XJ9X4wUkaDbjtb9E9ThLaJdudUNeQVLyG2FAQ2wx2lyydCXt4DXbBfWbKdHD542n2ZalJsNpv/StHlCZwDyLeMUr7ELEm/31YB6YKQ4kNE/HD1FMjNTe+CLZpdMHlSBSWEfGB2uF9VSy6UfEVLqN2Bd0rzYUJ+xn/W/6TsMHy6vo4NncBo3BIKCTUxigT4pxbbA54FRSOjO47QjgTYHoDhme8Ffrq+SbeqIdhdrlIBkK7XHh368MARGzbOCprr39DjRpeB1yezazVd1ZtyJeya3dYdmXDeKxaQKmhfQxx6d//BYhQff29QTL8T69fVwvryOjZwiJv44GMZ85UWu72hc1IOAN+o145llg032wNX8ZC/JxQLMCb0GwCUt8xfkM29WMygu3ksFjeUr62l+/ae8o9YdvNGTbJMf2NNaGX7RIMxDKCEZlJAgVNR7tU7xmq1Xu2ubvt7xQL8iUaDtiJKw83reBfqDvDiBQ/U1JjgxK9NIFqbyaU/PTLH1Ai6WJ6P4mD/Xv9BTFcqnV5hCUjV67UY0TNDMgyxmzYXYo2G645/0PcejxdmTP9MbhBbHMgrDznjdl9SUiwsAX4AdjV+gv3ZM3pMOlqxogDxYYjwXPVC8QtbybFjVhnJaJTJ6fxRCfnrk05pys14JqKQ/bcpc2h/WLlqEtbp+oRcrKmxFZa8tE3+46yTIIKnmiTpm5CTOwSG7UB7DaNeOx4jVBXVi+/z7Pxsbtr0LIiNvXlL7UyqubkNqirrYfPGnwiRqdMHZKpoc9WGQ161A+2g/hOaw7SUzcs5HFOT9VASZGUl4QT2sXNPTBRcuvwXnG9qhfqfG+STx22YUDZUAdbI0d4Sq/XChXDJ3zIBN9xgIxbJXCHGKI+RHNY+GgNAHLQhAvWE0l2E4C/ZB72khriqMRoiMBqcmNjPB56Ya5zcdu7cxdYQ8xSFqd4DitB6IDgioAeaqqhkxAFF7eqB4IgDPdBURSUjDihqVw8ERxzogaYqKvk3DasJT2tmD2EAAAAASUVORK5CYII="/>';
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
		

