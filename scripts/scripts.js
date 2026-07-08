import {properties} from "/u/scripts/properties.js";
const paths = ["code", "text", "elements", "border", "background", "position", "flex-containers", "flex-elements", "scrollbar", "pseudoclasses", "pseudoelements", "transitions", "animation", "transform"];

const information = document.querySelector("#information");
const overlay = document.querySelector("#overlay");
//const main = document.querySelector("main");
const close = document.querySelector("#close");
const button = document.querySelector("#button");
//const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const nav = document.querySelector("nav");
const content = document.querySelector("#content");
//const code = document.querySelector("#code");

const go_code = document.querySelector("#go-code");

function ifReload() {
	if (window.location.search.includes("p=/")) {
		console.log("window.location.search: ", window.location.search);
		let path = window.location.search.replace("?p=/", "").replace("/", "");
		console.log("path: ", path);
		if (paths.includes(path)) {
			let newPath = "/u/" + path + "/";
			window.history.replaceState(null, null, newPath);
		}
		else {
			window.history.replaceState(null, null, "/u/");
		}
	}
}

function update() {
	let path = window.location.pathname.split("/");
	let lastPath = path.at(-2);
	let secondLastPath = path.at(-3);
	if (lastPath == "information") {
		if (paths.includes(secondLastPath)) {
			if (secondLastPath == "code") {
				code();
			}
			else {
				go(secondLastPath);
			}
		}
		else {
			main();
		}
		information.hidden = false;
		overlay.hidden = false;
	}
	else if (paths.includes(lastPath)) {
		if (lastPath == "code") {
			code();
		}
		else {
			go(lastPath);
		}
	}
	else {
		main();
	}
}

function createButtons() {
	button.onclick = () => window.scrollTo(0, 0);
	if (window.scrollY > window.innerHeight) {
		button.style.display = "flex";
	}
	else {
		button.style.display = "none";
	}
	window.addEventListener("scroll", () => {
		if (window.scrollY > window.innerHeight) {
			button.style.display = "flex";
		}
		else {
			button.style.display = "none";
		}
	});
	
	close.onclick = () => {
		history.pushState(null, null, "/u/");
		main();
	}
	document.querySelector("#go-info").onclick = () => {
		history.pushState(null, null, window.location.pathname + "information/");
		information.hidden = false;
		overlay.hidden = false;
	};
	document.querySelectorAll(".close-info").forEach((e) => {
		e.onclick = () => {
			let path = window.location.pathname.split("/").at(-3);
			let newPath = path == "u" ? "" : path + "/";
			history.pushState(null, null, "/u/" + newPath);
			information.hidden = true;
			overlay.hidden = true;
		}
	});

	go_code.onclick = () => {
		history.pushState(null, null, "/u/code/");
		code();
	};
	
	paths.forEach(name => {
	    document.querySelector(`#go-${name}`).onclick = () => {
	    	history.pushState(null, null, "/u/" + name + "/");
			go(name);
	    };
	});
}

function main() {
	close.style.display = "none";
	nav.style.display = "flex";
	go_code.style.visibility = "visible";
	document.querySelector("#code").style.display = "none";
	information.hidden = true;
	overlay.hidden = true;
	content.innerHTML = "";
	document.title = "Свойства элементов css";
	h1.innerHTML = "Свойства элементов css";
}

function code() {
	close.style.display = "flex";
	nav.style.display = "none";
	go_code.style.visibility = "hidden";
	information.hidden = true;
	overlay.hidden = true;
	content.innerHTML = "";
	document.querySelector("#code").style.display = "block";
	document.title = "Готовый код";
	h1.innerHTML = "Готовый код";
}

function go(name) {
	close.style.display = "flex";
	nav.style.display = "none";
	information.hidden = true;
	overlay.hidden = true;
	go_code.style.visibility = "hidden";
	document.title = properties[name].title;
	h1.innerHTML = properties[name].title;
	content.innerHTML = "";
	Object.values(properties[name]).forEach((e) => {
		if (e == properties[name].title) return;
		let p = document.createElement("p");
		p.id = e.name;
		p.innerHTML = `${e.start}<b>${e.name}</b>${e.value}
<i>${e.example}</i>${e.default}`;
		content.append(p);
	});
}

ifReload();
window.addEventListener("popstate", update);
update();
createButtons();
navigator.serviceWorker.register("/u/scripts/serviceWorker.js");

// if ("serviceWorker" in navigator) {
// 	window.addEventListener("load", () => {
// 		navigator.serviceWorker.register("/u/scripts/serviceWorker.js")
// 			.then(reg => console.log('✅ SW registered'))
// 			.catch(err => console.log('❌ SW error:', err));
// 	});
// }

// fetch("/u/properties.json")
// .then(response => response.json())
// .then(data => {
// 	properties = data;
// 	createApp();
// });
