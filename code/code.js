import objects from "/u/code/objects.js";
const code = document.querySelector("#code");

const styleInIframe = `html,
body {
	margin: 0;
	height: 100%;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
}`;

const keydown = function(e) {
	if (e.key === "Tab") {
		e.preventDefault();
	
		// Получаем текущее выделение и диапазон (позицию курсора)
		const selection = window.getSelection();
		if (!selection.rangeCount) return;
		
		const range = selection.getRangeAt(0);
	
		// Создаем текстовый узел с символом табуляции
		// Рекомендуется использовать '\t', но в HTML-контексте 
		// для корректного отображения может потребоваться CSS (см. шаг ниже)
		const tabNode = document.createTextNode("\t");
	
		// Вставляем символ в позицию курсора
		range.insertNode(tabNode);
	
		// Перемещаем курсор сразу после вставленного символа Tab
		range.setStartAfter(tabNode);
		range.setEndAfter(tabNode);
		
		// Сбрасываем старое выделение и добавляем обновленный диапазон
		selection.removeAllRanges();
		selection.addRange(range);
	  }
}


Object.keys(objects).forEach(key => {
	// Первый блок с iframe
	let div1 = document.createElement("div");
	div1.id = key;
	div1.innerHTML = `<button>
		<svg width="29px" height="29px" viewBox="0 0 4 4" stroke-width="0.28">
			<path d="M1 1.65l1 1l1 -1"/>
		</svg>
	</button>
	<iframe></iframe>`;
	let iframe = div1.querySelector("iframe");
	iframe.srcdoc = `${objects[key].html}<style>${styleInIframe}${objects[key].css}</style><script>${objects[key].js}</script>`;

	// Второй блок с кодом	
	let div2 = document.createElement("div");
	div2.innerHTML = `<div class="buttons">
		<button class="bHtml aktiv">html</button>
		<button class="bCss">css</button>
		${objects[key].js ? `<button class="bJs">js</button>` : ""}
		<button class="bCopy">
			<svg width="16" height="16" viewBox="0 0 16 16" stroke-width="0">
			  <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
			</svg>
		</button>
	</div>
	<p class="html" style="display: block;" contenteditable></p>
	<p class="css" style="display: none;" contenteditable></p>
	<p class="js" style="display: none;" contenteditable></p>`;
	
	let html = div2.querySelector(".html");
	let css = div2.querySelector(".css");
	let js = div2.querySelector(".js");

	html.textContent = objects[key].html;
	css.textContent = objects[key].css;
	js.textContent = objects[key].js;
	
	html.addEventListener("input", () => {
		iframe.srcdoc = `${html.textContent}<style>${styleInIframe}${css.textContent}</style><script>${js.textContent}</script>`;
	});
	css.addEventListener("input", () => {
		iframe.srcdoc = `${html.textContent}<style>${styleInIframe}${css.textContent}</style><script>${js.textContent}</script>`;
	});
	js.addEventListener("input", () => {
		iframe.srcdoc = `${html.textContent}<style>${styleInIframe}${css.textContent}</style><script>${js.textContent}</script>`;
	});

	html.addEventListener("keydown", (e) => keydown(e));
	css.addEventListener("keydown", (e) => keydown(e));
	js.addEventListener("keydown", (e) => keydown(e));
	
	// Стрелка
	let button = div1.querySelector("button");
	button.onclick = () => {
		if (div2.style.display == "block") {
			button.querySelector("svg").style.scale = "1";
			div2.style.display = "none";
		}
		else {
			button.querySelector("svg").style.scale = "1 -1";
			div2.style.display = "block";
		}
	};
	
	// Переключатели кода
	let bHtml = div2.querySelector(".bHtml");
	let bCss = div2.querySelector(".bCss");
	let bJs = objects[key].js ? div2.querySelector(".bJs") : "";
	bHtml.onclick = () => {
		bHtml.className = "aktiv";
		bCss.className = "";
		if (objects[key].js) bJs.className = "";
		
		html.style.display = "block";
		css.style.display = "none";
		js.style.display = "none";
	};
	bCss.onclick = () => {
		bHtml.className = "";
		bCss.className = "aktiv";
		if (objects[key].js) bJs.className = "";
		
		css.style.display = "block";
		html.style.display = "none";
		js.style.display = "none";
	};
	if (objects[key].js) bJs.onclick = () => {
		bHtml.className = "";
		bCss.className = "";
		if (objects[key].js) bJs.className = "aktiv";
		
		js.style.display = "block";
		html.style.display = "none";
		css.style.display = "none";
	};

	// Кнопка копировать
	bCopy.onclick = () => {
		let code = "";
		if (html.style.display == "block") code = html.textContent;
		else if (css.style.display == "block") code = css.textContent;
		else if (js.style.display == "block") code = js.textContent;
		
		navigator.clipboard.writeText(code);
	};

	// Добавление объектов в DOM
	code.appendChild(div1);
	code.appendChild(div2);
});
