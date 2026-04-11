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
	console.log("/u/" + name + "/");
};

const routes = {
	"/u/": () => {
		close.style.display = "none";
		nav.style.display = "flex";
		document.title = "Свойства элементов css";
		h1.textContent = "Свойства элементов css";
		content.innerHTML = "";
		console.log("/u/");
	},
	"information": () => {
		information.style.display = "block";
		document.querySelector("#information+a").style.display = "block";
		document.querySelector("#information+a+*").style.position = "fixed";
		document.querySelector("#information+a+*").style.width = "100%";
	},
	"/u/text/": () => go("Свойства текста", "text"),
	"/u/elements/": () => go("Свойства элементов", "elements"),
	"/u/border/": () => go("Свойства границы", "border"),
	"/u/background/": () => go("Свойства фона", "background"),
	"/u/position/": () => go("Позиционирование", "position"),
	"/u/scrollbar/": () => go("Свойства скроллбара", "scrollbar"),
	"/u/flex-containers/": () => go("Флекс-контейнеры", "flex_containers"),
	"/u/flex-elements/": () => go("Флекс-элементы", "flex_elements"),
	"/u/pseudoclasses/": () => go("Псевдоклассы", "pseudoclasses"),
	"/u/pseudoelements/": () => go("Псевдоэлементы", "pseudoelements"),
	"/u/transitions/": () => go("Переходы", "transitions"),
	"/u/animation/": () => go("Анимация", "animation"),
	"/u/transform/": () => go("Трансформация", "transform")
};
const defaultRoute = "/u/";
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const close = document.querySelector("#close");
const h1 = document.querySelector("h1");
// const information = document.querySelector("#information");

fetch("./properties.json")
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
	const n = path.at(-1) == "information" ? -2 : -1;
	const route = routes[path.at(n)] ? path.at(n) : defaultRoute;
	routes[route]();
	if (n == -2) {
		routes.information();
	}
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
	close.onclick = () => {
		const path = "/u/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("close.click");
	};
	const button_info = document.querySelector("#button_info");
	button_info.onclick = () => {
		const path = window.location.pathname + "information/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("button_info.click");
	};
	const close_info = document.querySelectorAll(".close_info");
	close_info.forEach((e) => {
		e.onclick = () => {
			const path = window.location.pathname.replace("information/", "");
			history.pushState({}, "", path);
			handleRoute();
			console.log("button_info.click");
		};
	});
	const text = document.querySelector("#a1");
	text.onclick = () => {
		const path = "/u/text/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("text.click");
	};
	const elements = document.querySelector("#elements");
	elements.onclick = () => {
		const path = "/u/elements/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("elements.click");
	};
	const border = document.querySelector("#border");
	border.onclick = () => {
		const path = "/u/border/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("border.click");
	};
	const background = document.querySelector("#a4");
	background.onclick = () => {
		const path = "/u/background/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("background.click");
	};
	const position = document.querySelector("#a5");
	position.onclick = () => {
		const path = "/u/position/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("position.click");
	};
	const scrollbar = document.querySelector("#scrollbar");
	scrollbar.onclick = () => {
		const path = "/u/scrollbar/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("scrollbar.click");
	};
	const flex_containers = document.querySelector("#a7");
	flex_containers.onclick = () => {
		const path = "/u/flex-containers/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("flex-containers.click");
	};
	const flex_elements = document.querySelector("#flex-elements");
	flex_elements.onclick = () => {
		const path = "/u/flex-elements/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("flex-elements.click");
	};
	const pseudoclasses = document.querySelector("#a9");
	pseudoclasses.onclick = () => {
		const path = "/u/pseudoclasses/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("pseudoclasses.click");
	};
	const pseudoelements = document.querySelector("#a10");
	pseudoelements.onclick = () => {
		const path = "/u/pseudoelements/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("pseudoelements.click");
	};
	const transitions = document.querySelector("#transitions");
	transitions.onclick = () => {
		const path = "/u/transitions/";
		console.log("transitions.click");
		// Переход по маршруту
		history.pushState({}, "", path);
		handleRoute();
	};
	const animation = document.querySelector("#animation");
	animation.onclick = () => {
		const path = "/u/animation/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("animation.click");
	};
	const transform = document.querySelector("#a13");
	transform.onclick = () => {
		const path = "/u/transform/";
		history.pushState({}, "", path);
		handleRoute();
		console.log("transform.click");
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
