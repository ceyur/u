const properties = {
	text: {
		color: {
			name: "color",
			attribute: "цвет",
			description: "задаёт цвет текста",
			example: "green",
			default: "canvastext"
		},
		font_size: {
			name: "font-size",
			attribute: "размер",
			description: "задаёт размер текста",
			example: "25px",
			default: "medium"
		}
	}
};

let routes = {};
let defaultRoute = null;
const main = document.querySelector("main");
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const close = document.querySelector("#close");
const h1 = document.querySelector("h1");

var button = document.querySelector(".button");
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
window.addEventListener('scroll',()=>{document.querySelector(".button").style.display=pageYOffset>window.innerHeight?"flex":"none"});*/

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
	// Определяем маршруты и их обработчики
	routes = {
		"/u": () => {
			close.style.display = "none";
			nav.style.display = "flex";
			content.innerHTML = "";
			console.log("main");
		},
		"/u/text": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Свойства текста";
			h1.textContent = "Свойства текста";
			Object.values(properties.text).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.attribute + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		}
	};

	defaultRoute = "/u"; // По умолчанию

	// Слушаем изменения URL (кнопки браузера)
	window.addEventListener("popstate", handleRoute);

	// Инициализация маршрута при загрузке
	handleRoute();
}

// Обработка маршрута
function handleRoute() {
	console.log("window.location.pathname: ", window.location.pathname);
	const path = window.location.pathname;
	const route = routes[path] ? path : defaultRoute;
	routes[route]();
}

// Инициализация базового UI
function initUI() {
	// Привязка кнопок навигации
	close.addEventListener("click", () => {
		const path = "/u";
		console.log("close.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	});
	const text = document.querySelector("#a1");
	text.addEventListener("click", () => {
		const path = "/u/text";
		console.log("a1.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	});
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

// Запуск приложения
initApp();
