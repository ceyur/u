let routes = {};
let defaultRoute = null;
const main = document.querySelector("main");
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
// const close = document.querySelector(".close");
const close = document.querySelector("#close");

// var button = document.querySelector(".button");
// if (pageYOffset > window.innerHeight) {
// 	button.style.display = "flex";
// }
// else {
// 	button.style.display = "none";
// }
// window.addEventListener("scroll", () => {
// 	if (pageYOffset > window.innerHeight) {
// 		button.style.display = "flex";
// 	}
// 	else {
// 		button.style.display = "none";
// 	}
// });
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
			content.innerHTML = "";
			nav.style.display = "flex";
			close.style.display = "none";
			console.log("main");
		},
		"/u/text": () => {
			content.innerHTML = "<h1>text</h1>";
			nav.style.display = "none";
			close.style.display = "flex";
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
	const button = document.querySelector("#a1");
	button.addEventListener("click", () => {
		const path = "/u/text";
		console.log("a1.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	});
	close.addEventListener("click", () => {
		const path = "/u";
		console.log("close.click");
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
