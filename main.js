let routes = {};
let defaultRoute = null;

// Обработка маршрута
function handleRoute() {
	const path = window.location.pathname;
	const route = routes[path] ? path : defaultRoute;
	routes[route]();
}

// Точка входа приложения
function initApp() {
	console.log("App started");

	// Инициализация UI (создание базовой структуры)
	initUI();

	// Инициализация роутера (переключение между модулями)
	initRouter();

	// Регистрация Service Worker (для PWA)
	registerServiceWorker();
}

// Инициализация базового UI
function initUI() {
// 	const app = document.getElementById("app");
// 	app.innerHTML = `
// 		<header style="padding: 16px; background-color: #1e1e1e; color: #fff; display: flex; justify-content: space-between;">
// 			<h1>Smart Dashboard</h1>
// 			<nav>
// 				<button data-path="/tasks">Tasks</button>
// 				<button data-path="/notes">Notes</button>
// 				<button data-path="/tracker">Tracker</button>
// 			</nav>
// 		</header>
// 	<main id="main-content" style="padding: 16px;"></main>
// `;

	// Привязка кнопок навигации
	const button = document.querySelector("#a1");
	button.addEventListener("click", () => {
		const path = "/text";
		navigate(path);
	});
}

// Инициализация маршрутов
function initRouter() {
	// Определяем маршруты и их обработчики
	routes = {
		"/text": () => document.documentElement.innerHTML = "клро",
		// "/tasks": () => import("../modules/tasks/tasksUI.js").then(mod => mod.renderTasksUI()),
		// "/notes": () => import("../modules/notes/notesUI.js").then(mod => mod.renderNotesUI()),
		// "/tracker": () => import("../modules/tracker/trackerUI.js").then(mod => mod.renderTrackerUI())
	};

	defaultRoute = "text"; // По умолчанию открывается Tasks

	// Слушаем изменения URL (кнопки браузера)
	window.addEventListener("popstate", handleRoute);

	// Инициализация маршрута при загрузке
	handleRoute();
}

// Переход по маршруту
function navigate(path) {
	history.pushState({}, "", path);
	handleRoute();
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
