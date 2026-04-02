let routes = {};
let defaultRoute = null;
const main = document.querySelector("main");

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

	// Инициализация UI (создание базовой структуры)
	initUI();
	console.log("ïnitUI");

	// Инициализация роутера (переключение между модулями)
	initRouter();
	console.log("ïnitRouter");

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
		const path = "/u/text";
		console.log("a1.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	});
}

// Обработка маршрута
function handleRoute() {
	console.log("window.location.pathname: ", window.location.pathname);
	const path = window.location.pathname;
	const route = routes[path] ? path : defaultRoute;
	routes[route]();
}

// Инициализация маршрутов
function initRouter() {
	// Определяем маршруты и их обработчики
	routes = {
		"/u/text": () => { main.innerHTML = "<h1>hfbdkgblsdbfg</h1>"; console.log("text");
			//fetch('pages/text.html').then(response => {return response.text();}).then(html => {
			//main.innerHTML = html;
		},
		"/u": () => {
			main.innerHTML = 
`<header>
	<a href="#information">
		<svg>
			<circle fill="black" cx="14.5" cy="7" r="1"/>
			<path stroke-width="2" d="M14.5 13l0 10"/>
		</svg>
	</a>
	<h1>Свойства элементов css</h1>
	<a href="pages/code.html">
		<svg>
			<path fill="none" stroke-width="1.75" stroke-linejoin="round" d="M19.75 9.25 25 14.5l-5.25 5.25m-10.5 0L4 14.5l5.25-5.25m7.5-3-4.5 16.5"/>
		</svg>
	</a>
</header>
<nav>
	<a id="a1">Свойства текста</a>
	<a href="pages/elements.html">Свойства элементов</a>
	<a href="pages/border.html">Свойства границы</a>
	<a id="a4" href="pages/background.html">Свойства фона</a>
	<a id="a5" href="pages/pozition.html">Позиционирование</a>
	<a href="pages/scrollbar.html">Свойства скроллбара</a>
	<a id="a7" href="pages/flex-containers.html">Флекс-контейнеры</a>
	<a href="pages/flex-elements.html">Флекс-элементы</a>
	<a id="a9" href="pages/pseudoclasses.html">Псевдоклассы</a>
	<a id="a10" href="pages/pseudoelements.html">Псевдоэлементы</a>
	<a href="pages/transitions.html">Переходы</a>
	<a href="pages/animation.html">Анимация</a>
	<a id="a13" href="pages/transform.html">Трансформация</a>
</nav>`;
			console.log("main");
		},
		// "/tasks": () => import("../modules/tasks/tasksUI.js").then(mod => mod.renderTasksUI()),
		// "/notes": () => import("../modules/notes/notesUI.js").then(mod => mod.renderNotesUI()),
		// "/tracker": () => import("../modules/tracker/trackerUI.js").then(mod => mod.renderTrackerUI())
	};

	defaultRoute = "/u"; // По умолчанию открывается Tasks

	// Слушаем изменения URL (кнопки браузера)
	window.addEventListener("popstate", handleRoute);

	// Инициализация маршрута при загрузке
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