import properties from "/u/scripts/properties.js";
const paths = ["text", "elements", "border", "background", "position", "flex-containers", "flex-elements", "scrollbar", "pseudoclasses", "pseudoelements", "transitions", "animation", "transform"];

const information = document.querySelector("#information");
const overlay = document.querySelector("#overlay");
const main = document.querySelector("main");
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
		let path = window.location.search.replace("?p=", "").replaceAll("/", "");
		let ifInfo = path.includes("information");
		let basePath = path.replace("information", "");
		let newPath = paths.includes(basePath) ? basePath + "/" : "";
		let finalPath = ifInfo ? newPath + "information/" : newPath;
		window.history.replaceState(null, null, "/u/" + finalPath);
		console.log("Reload: ", window.location.pathname);
	}
}

function update() {
	let path = window.location.pathname.split("/");
	let lastPath = path.at(-2);
	let secondLastPath = path.at(-3);
	let ifInfo = lastPath.includes("information");
	let basePath = ifInfo ? secondLastPath : lastPath;

	if (paths.includes(basePath)) go(basePath);
	else if (basePath === "code") goCode();
	else goMain();
	
	if (ifInfo) info.visible();
	console.log("Update: ", window.location.pathname);
}

function createButtons() {
	close.onclick = () => {
		history.pushState(null, null, "/u/");
		goMain();
		console.log("close.click");
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
		goCode();
		console.log("go-code.click");
	};
	
	go_info.onclick = () => {
		history.pushState(null, null, window.location.pathname + "information/");
		info.visible();
		console.log("go-info.click");
	};
	close_info.forEach((e) => {
		e.onclick = () => {
			let path = window.location.pathname.split("/").at(-3);
			let newPath = path === "u" ? "" : path + "/";
			history.pushState(null, null, "/u/" + newPath);
			info.hidden();
			console.log("close-info.click");
		}
	});
	
	paths.forEach(name => {
	    document.querySelector(`#go-${name}`).onclick = () => {
	    	history.pushState(null, null, "/u/" + name + "/");
			go(name);
			console.log(`go-${name}.click`);
	    };
	});
}

function goMain() {
	go_code.style.visibility = "visible";
	info.hidden();
	nav.style.display = "flex";
	code.style.display = "none";
	content.innerHTML = "";
	close.style.display = "none";
	document.title = "Свойства элементов css";
	h1.textContent = "Свойства элементов css";
	window.scrollTo(0, 0);
}

function goCode() {
	go_code.style.visibility = "hidden";
	info.hidden();
	nav.style.display = "none";
	code.style.display = "block";
	content.innerHTML = "";
	close.style.display = "flex";
	document.title = "Готовый код";
	h1.textContent = "Готовый код";
	window.scrollTo(0, 0);
}

function go(name) {
	go_code.style.visibility = "hidden";
	console.log("go_code.hidden");
	info.hidden();
	nav.style.display = "none";
	code.style.display = "none";
	content.innerHTML = "";
	close.style.display = "flex";
	document.title = properties[name].title;
	h1.textContent = properties[name].title;
	Object.values(properties[name]).forEach((e) => {
		if (e === properties[name].title) return;
		let p = document.createElement("p");
		p.id = e.name;
		p.innerHTML = `${e.start}<b>${e.name}</b>${e.value}
<i>${e.example}</i>${e.default}`;
		content.append(p);
	});
	window.scrollTo(0, 0);
	console.log("content.load");
}

const info = {
	visible: function() {
		information.style.display = "block";
		overlay.style.display = "block";
		main.style.position = "fixed";
	},
	hidden: function() {
		information.style.display = "none";
		overlay.style.display = "none";
		main.style.position = "relative";
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
