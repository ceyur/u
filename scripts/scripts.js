import "/u/scripts/properties.js";
const paths = ["code", "text", "elements", "border", "background", "position", "flex-containers", "flex-elements", "scrollbar", "pseudoclasses", "pseudoelements", "transitions", "animation", "transform"];

const information = document.querySelector("#information");
const overlay = document.querySelector("#overlay");
// const main = document.querySelector("main");
// const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const nav = document.querySelector("nav");
const content = document.querySelector("#content");
const code = document.querySelector("#code");

const close = document.querySelector("#close");
const button = document.querySelector("#button");
const go_code = document.querySelector("#go-code");
const go_info = document.querySelector("#go-info");
const close_info = document.querySelectorAll(".close-info");

function ifReload() {
	if (window.location.search.includes("p=/")) {
		let path = window.location.search.replace("?p=/", "").split("/");
		console.log("path: ", path);
		let lastPath = path.at(-2);
		console.log("lastPath: ", lastPath);
		let secondLastPath = path.at(-3);
		console.log("secondLastPath: ", secondLastPath);
		if (lastPath == "information") {
			if (paths.includes(secondLastPath)) {
				let newPath = "/u/" + secondLastPath + "/information/";
				window.history.replaceState(null, null, newPath);
			}
			else {
				window.history.replaceState(null, null, "/u/information/");
			}
		}
		else if (paths.includes(lastPath)) {
			let newPath = "/u/" + lastPath + "/";
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
				codeView();
			}
			else {
				go(secondLastPath);
			}
		}
		else {
			main();
		}
		info.visible();
	}
	else if (paths.includes(lastPath)) {
		if (lastPath == "code") {
			codeView();
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
	close.onclick = () => {
		history.pushState(null, null, "/u/");
		main();
	}
	
	button.onclick = () => window.scrollTo(0, 0);
	window.addEventListener("scroll", () => {
		if (window.scrollY > window.innerHeight) {
			button.style.display = "flex";
		}
		else {
			button.style.display = "none";
		}
	});
	
	go_code.onclick = () => {
		history.pushState(null, null, "/u/code/");
		codeView();
	};
	
	go_info.onclick = () => {
		history.pushState(null, null, window.location.pathname + "information/");
		info.visible();
	};
	close_info.forEach((e) => {
		e.onclick = () => {
			let path = window.location.pathname.split("/").at(-3);
			let newPath = path == "u" ? "" : path + "/";
			history.pushState(null, null, "/u/" + newPath);
			info.hidden();
		}
	});
	
	paths.forEach(name => {
	    document.querySelector(`#go-${name}`).onclick = () => {
	    	history.pushState(null, null, "/u/" + name + "/");
			go(name);
	    };
	});
}

function main() {
	go_code.style.visibility = "visible";
	info.hidden();
	nav.style.display = "flex";
	code.style.display = "none";
	content.innerHTML = "";
	close.style.display = "none";
	document.title = "Свойства элементов css";
	h1.innerHTML = "Свойства элементов css";
}

function codeView() {
	go_code.style.visibility = "hidden";
	info.hidden();
	nav.style.display = "none";
	code.style.display = "block";
	content.innerHTML = "";
	close.style.display = "flex";
	document.title = "Готовый код";
	h1.innerHTML = "Готовый код";
}

function go(name) {
	go_code.style.visibility = "hidden";
	info.hidden();
	nav.style.display = "none";
	code.style.display = "none";
	content.innerHTML = "";
	close.style.display = "flex";
	document.title = properties[name].title;
	h1.innerHTML = properties[name].title;
	Object.values(properties[name]).forEach((e) => {
		if (e == properties[name].title) return;
		let p = document.createElement("p");
		p.id = e.name;
		p.innerHTML = `${e.start}<b>${e.name}</b>${e.value}
<i>${e.example}</i>${e.default}`;
		content.append(p);
	});
}

const info = {
	visible: function() {
		information.style.display = "block";
		overlay.style.display = "block";
		document.querySelector("#overlay+*").style.position = "fixed";
		document.querySelector("#overlay+*").style.width = "100%";
	},
	hidden: function() {
		information.style.display = "none";
		overlay.style.display = "none";
		document.querySelector("#overlay+*").style.position = "relative";
		document.querySelector("#overlay+*").style.width = "auto";
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
