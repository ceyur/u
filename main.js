function go (title, name) {
	close.style.display = "flex";
	nav.style.display = "none";
	document.title = title;
	h1.textContent = title;
	Object.values(properties[name]).forEach((e) => {
		p = document.createElement("p");
		p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
		content.append(p);
	});
	console.log("/u/", name);
};

const routes = {
	"/u": () => {
		close.style.display = "none";
		nav.style.display = "flex";
		document.title = "Свойства элементов css";
		h1.textContent = "Свойства элементов css";
		content.innerHTML = "";
		console.log("/u");
	},
	"/u/text": () => go("Свойства текста", "text"),
	"/u/elements": () => go("Свойства элементов", "elements"),
	"/u/border": () => go("Свойства границы", "border"),
	"/u/background": () => go("Свойства фона", "background"),
	"/u/position": () => go("Позиционирование", "position"),
	"/u/scrollbar": () => go("Свойства скроллбара", "scrollbar"),
	"/u/flex-containers": () => go("Флекс-контейнеры", "flex_containers"),
	"/u/flex-elements": () => go("Флекс-элементы", "flex_elements"),
	"/u/pseudoclasses": () => go("Псевдоклассы", "pseudoclasses"),
	"/u/pseudoelements": () => go("Псевдоэлементы", "pseudoelements"),
	"/u/transitions": () => go("Переходы", "transitions"),
	"/u/animation": () => go("Анимация", "animation"),
	"/u/transform": () => go("Трансформация", "transform")
};
const defaultRoute = "/u";
// const main = document.querySelector("main");
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const close = document.querySelector("#close");
const h1 = document.querySelector("h1");
const information = document.querySelector("#information");
const button_info = document.querySelector("#button_info");
const close_info = document.querySelector("#close_info");

fetch('./properties.json')
.then(response => {
if (!response.ok) {
  throw new Error('Ошибка загрузки');
}
return response.json();
})
.then(data => {
	properties = data;
	initApp();
});

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
	close.onclick = () => {
		const path = "/u";
		console.log("close.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const text = document.querySelector("#a1");
	text.onclick = () => {
		const path = "/u/text";
		console.log("text.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const elements = document.querySelector("#elements");
	elements.onclick = () => {
		const path = "/u/elements";
		console.log("elements.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const border = document.querySelector("#border");
	border.onclick = () => {
		const path = "/u/border";
		console.log("border.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const background = document.querySelector("#a4");
	background.onclick = () => {
		const path = "/u/background";
		console.log("background.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const position = document.querySelector("#a5");
	position.onclick = () => {
		const path = "/u/position";
		console.log("position.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const scrollbar = document.querySelector("#scrollbar");
	scrollbar.onclick = () => {
		const path = "/u/scrollbar";
		console.log("scrollbar.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const flex_containers = document.querySelector("#a7");
	flex_containers.onclick = () => {
		const path = "/u/flex-containers";
		console.log("flex-containers.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const flex_elements = document.querySelector("#flex-elements");
	flex_elements.onclick = () => {
		const path = "/u/flex-elements";
		console.log("flex-elements.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const pseudoclasses = document.querySelector("#a9");
	pseudoclasses.onclick = () => {
		const path = "/u/pseudoclasses";
		console.log("pseudoclasses.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const pseudoelements = document.querySelector("#a10");
	pseudoelements.onclick = () => {
		const path = "/u/pseudoelements";
		console.log("pseudoelements.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	
	const transitions = document.querySelector("#transitions");
	transitions.onclick = () => {
		const path = "/u/transitions";
		console.log("transitions.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const animation = document.querySelector("#animation");
	animation.onclick = () => {
		const path = "/u/animation";
		console.log("animation.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const transform = document.querySelector("#a13");
	transform.onclick = () => {
		const path = "/u/transform";
		console.log("transform.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	close_info.onclick = () => {
		information.style.display = "none";
		document.querySelector("#information+a").style.display = "none";
		document.querySelector("#information+a+*").style.position = "relative";
		document.querySelector("#information+a+*").style.width = "auto";
	};
	button_info.onclick = () => {
		content.innerHTML = "";
		information.style.display = "block";
		document.querySelector("#information+a").style.display = "block";
		document.querySelector("#information+a+*").style.position = "fixed";
		document.querySelector("#information+a+*").style.width = "100%";
	};
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
