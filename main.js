(function(l) {
	if (l.search.includes("p=/")) {
		const path = l.search.split("p=")[1].split("&")[0];
		const newPath = l.pathname.slice(0, l.pathname.lastIndexOf("/")) + path;
		window.history.replaceState(null, null, newPath + l.hash);
	}
}(window.location));

function go(title, name) {
	close.style.display = "flex";
	nav.style.display = "none";
	document.title = title;
	h1.textContent = title;
	Object.values(properties[name]).forEach((e) => {
		p = document.createElement("p");
		p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
		content.append(p);
	});
	information.style.display = "none";
	document.querySelector("#information+a").style.display = "none";
	document.querySelector("#information+a+*").style.position = "relative";
	document.querySelector("#information+a+*").style.width = "auto";
	console.log("/u/" + name + "/");
};

const routes = {
	"u": () => {
		close.style.display = "none";
		nav.style.display = "flex";
		document.title = "Свойства элементов css";
		h1.textContent = "Свойства элементов css";
		content.innerHTML = "";
		console.log("/u/");
		information.style.display = "none";
		document.querySelector("#information+a").style.display = "none";
		document.querySelector("#information+a+*").style.position = "relative";
		document.querySelector("#information+a+*").style.width = "auto";
	},
	"information": () => {
		information.style.display = "block";
		document.querySelector("#information+a").style.display = "block";
		document.querySelector("#information+a+*").style.position = "fixed";
		document.querySelector("#information+a+*").style.width = "100%";
	},
	"text": () => go("Свойства текста", "text"),
	"elements": () => go("Свойства элементов", "elements"),
	"border": () => go("Свойства границы", "border"),
	"background": () => go("Свойства фона", "background"),
	"position": () => go("Позиционирование", "position"),
	"scrollbar": () => go("Свойства скроллбара", "scrollbar"),
	"flex-containers": () => go("Флекс-контейнеры", "flex_containers"),
	"flex-elements": () => go("Флекс-элементы", "flex_elements"),
	"pseudoclasses": () => go("Псевдоклассы", "pseudoclasses"),
	"pseudoelements": () => go("Псевдоэлементы", "pseudoelements"),
	"transitions": () => go("Переходы", "transitions"),
	"animation": () => go("Анимация", "animation"),
	"transform": () => go("Трансформация", "transform")
};
const defaultRoute = "/u/";
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const close = document.querySelector("#close");
const h1 = document.querySelector("h1");
// const information = document.querySelector("#information");

fetch("properties.json")
.then(response => {
if (!response.ok) {
  throw new Error("Ошибка загрузки");
}
return response.json();
})
.then(data => {
	properties = data;
	initApp();
});

// Точка входа приложения
function initApp() {
	console.log("App started");

	// Инициализация роутера (переключение между модулями)
	initRouter();
	console.log("ïnitRouter");

	// Инициализация UI (создание базовой структуры)
	initUI();
	console.log("ïnitUI");

	// Регистрация Service Worker (для PWA)
	registerServiceWorker();
}

// Инициализация маршрутов
function initRouter() {
	// Слушаем изменения URL (кнопки браузера)
	window.addEventListener("popstate", handleRoute);
	// Инициализация маршрута при загрузке
	handleRoute();
}

// Обработка маршрута
// function handleRoute() {
// 	console.log("window.location.pathname: ", window.location.pathname);
// 	const path = window.location.pathname;
// 	const route = routes[path] ? path : defaultRoute;
// 	routes[route]();
// }
function handleRoute() {
	console.log("window.location.pathname: ", window.location.pathname);
	const path = window.location.pathname.split("/");
	console.log(path);
	const n = path.at(-2) == "information" ? -3 : -2;
	const route = routes[path.at(n)] ? path.at(n) : defaultRoute;
	routes[route]();
	if (n == -3) {
		routes.information();
	}
}

route(path) {
	history.pushState({}, "", path);
	handleRoute();
	console.log(path + " click");
}

// Инициализация базового UI
function initUI() {
	// Привязка кнопок навигации
	const button = document.querySelector(".button");
	if (pageYOffset > window.innerHeight) {
		button.style.display = "flex";
	}
	else {
		button.style.display = "none";
	}
	window.addEventListener("scroll", () => {
		if (pageYOffset > window.innerHeight) {
			button.style.display = "flex";
		}
		else {
			button.style.display = "none";
		}
	});
	/*document.querySelector(".button").style.display=pageYOffset>window.innerHeight?"flex":"none";
	window.addEventListener("scroll",()=>{document.querySelector(".button").style.display=pageYOffset>window.innerHeight?"flex":"none"});*/
	
	close.onclick = () => route("/u/");
	
	const button_info = document.querySelector("#button_info");
	button_info.onclick = () => route(window.location.pathname + "information/");
	
	const close_info = document.querySelectorAll(".close_info");
	close_info.forEach((e) => {
		e.onclick = () => route(window.location.pathname.replace("information/", ""));
	});
	
	const text = document.querySelector("#a1");
	text.onclick = () => route("/u/text/");
	
	const elements = document.querySelector("#elements");
	elements.onclick = () => route("/u/elements/");
	
	const border = document.querySelector("#border");
	border.onclick = () => route("/u/border/");
	
	const background = document.querySelector("#a4");
	background.onclick = () => route("/u/background/");
	
	const position = document.querySelector("#a5");
	position.onclick = () => route("/u/position/");
	
	const scrollbar = document.querySelector("#scrollbar");
	scrollbar.onclick = () => route("/u/scrollbar/");
	
	const flex_containers = document.querySelector("#a7");
	flex_containers.onclick = () => route("/u/flex-containers/");
	
	const flex_elements = document.querySelector("#flex-elements");
	flex_elements.onclick = () => route("/u/flex-elements/");
	
	const pseudoclasses = document.querySelector("#a9");
	pseudoclasses.onclick = () => route("/u/pseudoclasses/");
	
	const pseudoelements = document.querySelector("#a10");
	pseudoelements.onclick = () => route("/u/pseudoelements/");
	
	const transitions = document.querySelector("#transitions");
	transitions.onclick = () => route("/u/transitions/");
	
	const animation = document.querySelector("#animation");
	animation.onclick = () => route("/u/animation/");
	
	const transform = document.querySelector("#a13");
	transform.onclick = () => route("/u/transform/");
}

// Регистрация Service Worker
function registerServiceWorker() {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker
				.register("./serviceWorker.js")
				.then(registration => {
					console.log("Service Worker registered:", registration);
				})
				.catch(error => {
					console.error("Service Worker registration failed:", error);
				});
		});
	} else {
		console.log("Service Worker not supported");
	}
}
