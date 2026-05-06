import {properties} from "/u/scripts/properties.js";
const paths = ["code", "text", "elements", "border", "background", "position", "scrollbar", "flex-containers", "flex-elements", "pseudoclasses", "pseudoelements", "transitions", "animation", "transform"];
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const h1 = document.querySelector("h1");
const close = document.querySelector("#close");
const button_code = document.querySelector("#button_code");

function ifReload() {
	if (window.location.search.includes("p=/")) {
		console.log("window.location.search: ", window.location.search);
		let path = window.location.search.replace("?p=/", "").replace("/", "");
		console.log("path: ", path);
		if (!paths.includes(path)) {
			window.history.replaceState(null, null, "/u/");
		}
		else {
			let newPath = "/u/" + path + "/";
			window.history.replaceState(null, null, newPath);
		}
	}
}

function update() {
	let path = window.location.pathname.split("/");
	let lastPath = path.at(-2);
	let secondLastPath = path.at(-3);
	if (lastPath == "information") {
		if (paths.includes(secondLastPath)) {
			go(secondLastPath);
		}
		else {
			main();
		}
		info.visible();
	}
	else if (paths.includes(lastPath)) {
		if (lastPath == code) {
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
		info.visible();
	};
	document.querySelectorAll(".close_info").forEach((e) => {
		e.onclick = () => {
			let path = window.location.pathname.split("/").at(-3);
			if (path == "u") {
				history.pushState(null, null, "/u/");
			}
			else {
				history.pushState(null, null, "/u/" + path + "/");
			}
			info.hidden();
		}
	});

	button_code.onclick = () => {
		history.pushState(null, null, "/u/code/");
		code();
	};
	
	paths.forEach(name => {
	    document.querySelector(`#${name}`).onclick = () => {
	    	history.pushState(null, null, "/u/" + name + "/");
			go(name);
	    };
	});
}

function main() {
	close.style.display = "none";
	nav.style.display = "flex";
	button_code.style.display = "block";
	document.querySelector("#code").style.display = "none";
	info.hidden();
	content.innerHTML = "";
	document.title = "Свойства элементов css";
	h1.innerHTML = "Свойства элементов css";
}

function code() {
	close.style.display = "flex";
	nav.style.display = "none";
	button_code.style.display = "none";
	info.hidden();
	content.innerHTML = "";
	document.querySelector("#code").style.display = "block";
	document.title = "Готовый код";
	h1.innerHTML = "Готовый код";
}

function go(name) {
	close.style.display = "flex";
	nav.style.display = "none";
	info.hidden();
	button_code.style.display = "none";
	document.title = properties[name].title;
	h1.innerHTML = properties[name].title;
	content.innerHTML = "";
	Object.values(properties[name]).forEach((e) => {
		if (e == properties[name].title) return;
		let p = document.createElement("p");
		p.innerHTML = `<b>${e.name}</b>: ${e.value}; – ${e.description}<br><i>${e.name}: ${e.example};</i> (${e.default})`;
		content.append(p);
	});
}

const info = {
	visible: function() {
		document.querySelector("#information").style.display = "block";
		document.querySelector("#information+a").style.display = "block";
		document.querySelector("#information+a+*").style.position = "fixed";
		document.querySelector("#information+a+*").style.width = "100%";
	},
	hidden: function() {
		document.querySelector("#information").style.display = "none";
		document.querySelector("#information+a").style.display = "none";
		document.querySelector("#information+a+*").style.position = "relative";
		document.querySelector("#information+a+*").style.width = "auto";
	}
};

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
