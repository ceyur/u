const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const h1 = document.querySelector("h1");
const close = document.querySelector("#close");
let properties;

fetch("/u/properties.json")
.then(response => response.json())
.then(data => {
	properties = data;
	createApp();
});

function createApp() {
	ifReload();
	createServiceWorker();
	window.addEventListener("popstate", update);
	update();
	createButtons();
}

function ifReload() {
	if (window.location.search.includes("p=/")) {
		const path = window.location.search.replace("?p=", "");
		const newPath = "/u/" + path;
		window.history.replaceState(null, null, newPath);
	}
}

function createServiceWorker() {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("./serviceWorker.js");
		});
	}
}

function update() {
	const path = window.location.pathname.split("/");
	const lastPath = path.at(-2);
	const secondLastPath = path.at(-3);
	if (lastPath == "information") {
		go(secondLastPath);
		infoVisible();
	}
	else if (["text", "elements", "border", "background", "position", "scrollbar", "flex-containers", "flex-elements", "pseudoclasses", "pseudoelements", "transitions", "animation", "transform"].includes(lastPath)) {
		go(lastPath);
	}
	else {
		main();
	}
}

function createButtons() {
	const button = document.querySelector(".button");
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
	document.querySelector("#button_info").onclick = () => {
		history.pushState(null, null, window.location.pathname + "information/");
		infoVisible();
	};
	document.querySelectorAll(".close_info").forEach((e) => {
		e.onclick = () => goName(window.location.pathname.split("/").at(-3));
	});
	
	document.querySelector("#text").onclick = () => goName("text");
	document.querySelector("#elements").onclick = () => goName("elements");
	document.querySelector("#border").onclick = () => goName("border");
	document.querySelector("#background").onclick = () => goName("background");
	document.querySelector("#position").onclick = () => goName("position");
	document.querySelector("#scrollbar").onclick = () => goName("scrollbar");
	document.querySelector("#flex-containers").onclick = () => goName("flex-containers");
	document.querySelector("#flex-elements").onclick = () => goName("flex-elements");
	document.querySelector("#pseudoclasses").onclick = () => goName("pseudoclasses");
	document.querySelector("#pseudoelements").onclick = () => goName("pseudoelements");
	document.querySelector("#transitions").onclick = () => goName("transitions");
	document.querySelector("#animation").onclick = () => goName("animation");
	document.querySelector("#transform").onclick = () => goName("transform");
}

function goName(name) {
	history.pushState(null, null, "/u/" + name + "/");
	go(name);
}

function main() {
	close.style.display = "none";
	nav.style.display = "flex";
	infoHidden();
	content.innerHTML = "";
	document.title = "Свойства элементов css";
	h1.innerHTML = "Свойства элементов css";
}

function go(name) {
	close.style.display = "flex";
	nav.style.display = "none";
	infoHidden();
	document.title = properties[name].title;
	h1.innerHTML = properties[name].title;
	Object.keys(properties[name]).forEach((e) => {
		if (typeof e == "string") return;
		let p = document.createElement("p");
		p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
		content.append(p);
	});
}

function infoVisible() {
	document.querySelector("#information").style.display = "block";
	document.querySelector("#information+a").style.display = "block";
	document.querySelector("#information+a+*").style.position = "fixed";
	document.querySelector("#information+a+*").style.width = "100%";
}

function infoHidden() {
	document.querySelector("#information").style.display = "none";
	document.querySelector("#information+a").style.display = "none";
	document.querySelector("#information+a+*").style.position = "relative";
	document.querySelector("#information+a+*").style.width = "auto";
}
