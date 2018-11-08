function swapStyleSheet() {
	var sheet = document.getElementById("pagestyle").getAttribute("href");
	console.log(sheet);
	if (sheet == "assets/css/clean.css") {
		document.getElementById("pagestyle").setAttribute("href", "assets/css/dark.css");
	} else {
		document.getElementById("pagestyle").setAttribute("href", "assets/css/clean.css");
	}
}

function initiate() {
	var divLogin = document.getElementById("login");

	divLogin.onclick = function () { swapStyleSheet(); };
}

window.onload = initiate();
