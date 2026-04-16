const paths = ["text", "elements", "border", "background", "position", "scrollbar", "flex-containers", "flex-elements", "pseudoclasses", "pseudoelements", "transitions", "animation", "transform"];
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
		let path = window.location.search.replace("?p=", "");
		let newPath = "/u" + path;
		window.history.replaceState(null, null, newPath);
	}
}

function createServiceWorker() {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("/u/serviceWorker.js");
		});
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
	info.hidden();
	content.innerHTML = "";
	document.title = "Свойства элементов css";
	h1.innerHTML = "Свойства элементов css";
}

function go(name) {
	close.style.display = "flex";
	nav.style.display = "none";
	info.hidden();
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
