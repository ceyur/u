let routes = {};
let defaultRoute = null;
const main = document.querySelector("main");
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
    	console.log(data);
		initApp();
  });

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
			document.title = "Свойства элементов css";
			h1.textContent = "Свойства элементов css";
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
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/elements": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Свойства элементов";
			h1.textContent = "Свойства элементов";
			Object.values(properties.elements).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/border": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Свойства границы";
			h1.textContent = "Свойства границы";
			Object.values(properties.border).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/background": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Свойства фона";
			h1.textContent = "Свойства фона";
			Object.values(properties.background).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/position": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Позиционирование";
			h1.textContent = "Позиционирование";
			Object.values(properties.position).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/scrollbar": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Свойства скроллбара";
			h1.textContent = "Свойства скроллбара";
			Object.values(properties.scrollbar).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/flex-containers": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Флекс-контейнеры";
			h1.textContent = "Флекс-контейнеры";
			Object.values(properties.flex_containers).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/flex-elements": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Флекс-элементы";
			h1.textContent = "Флекс-элементы";
			Object.values(properties.background).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/pseudoclasses": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Псевдоклассы";
			h1.textContent = "Псевдоклассы";
			Object.values(properties.background).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/pseudoelements": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Псевдоэлементы";
			h1.textContent = "Псевдоэлементы";
			Object.values(properties.background).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/transitions": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Переходы";
			h1.textContent = "Переходы";
			Object.values(properties.background).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/animation": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Анимация";
			h1.textContent = "Анимация";
			Object.values(properties.background).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
				content.append(p);
			});
			console.log("text");
		},
		"/u/transform": () => {
			close.style.display = "flex";
			nav.style.display = "none";
			document.title = "Трансформация";
			h1.textContent = "Трансформация";
			Object.values(properties.background).forEach((e) => {
				p = document.createElement("p");
				p.innerHTML = "<b>" + e.name + "</b>: " + e.value + "; – " + e.description +"<br><i>" + e.name + ": " + e.example + ";" + "</i> " + "(" + e.default + ")";
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
	close_info.onclick = () => {
		information.style.display = "none";
		document.querySelector("#information+a").style.display = "none";
		document.querySelector("#information+a+*").style.position = "relative";
		document.querySelector("#information+a+*").style.width = "auto";
	};
	button_info.onclick = () => {
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

// Запуск приложения
initApp();
