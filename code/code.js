import objects from "/u/code/objects.js";
const code = document.querySelector("#code");

let styleInIframe = `html,
	body {
		margin: 0;
		height: 100%;
	}
	body {
		display: flex;
		justify-content: center;
		align-items: center;
	}`;

const autoHeight = function(element) {
	element.style.height = 0;
	element.style.height = (element.scrollHeight - 38 - 6) + "px";
}

Object.keys(objects).forEach(key => {
	let div1 = document.createElement("div");
	div1.id = key;
	div1.innerHTML = `<button><svg viewBox="0 0 4 4" width="29px" height="29px" stroke-width="0.28"><path d="M1 1.65l1 1l1 -1"/></svg></button><iframe></iframe>`;
	let iframe = div1.querySelector("iframe")
	iframe.srcdoc = `${objects[key].html}<style>${styleInIframe}${objects[key].css}</style><script>${objects[key].js}</script>`;


	const ifJs = objects[key].js !== "" ? '<button class="bJs">js</button>' : "";
	
	let div2 = document.createElement("div");
	div2.innerHTML = `<div class="buttons">
		<button class="bHtml aktiv">html</button>
		<button class="bCss">css</button>
		${ifJs}
	</div>
	<textarea class="html" style="display: block;"></textarea>
	<textarea class="css" style="display: none;"></textarea>
	<textarea class="js" style="display: none;"></textarea>`;
	let html = div2.querySelector('.html');
	let css = div2.querySelector('.css');
	let js = div2.querySelector('.js');


	html.value = objects[key].html;
	css.value = objects[key].css;
	js.value = objects[key].js;
	html.addEventListener("input", () => {
		iframe.srcdoc = `${html.value}<style>${styleInIframe}${css.value}</style><script>${js.value}</script>`;
	});
	css.addEventListener("input", () => {
		iframe.srcdoc = `${html.value}<style>${styleInIframe}${css.value}</style><script>${js.value}</script>`;
	});
	js.addEventListener("input", () => {
		iframe.srcdoc = `${html.value}<style>${styleInIframe}${css.value}</style><script>${js.value}</script>`;
	});
	

	let button = div1.querySelector("button");
	button.onclick = () => {
		if (div2.style.display == "block") {
			button.querySelector("svg").style.scale = "1";
			div2.style.display = "none";
		}
		else {
			button.querySelector("svg").style.scale = "1 -1";
			div2.style.display = "block";
			autoHeight(html);
		}
	};

	
	let bHtml = div2.querySelector(".bHtml");
	let bCss = div2.querySelector(".bCss");
	let bJs;
	if (ifJs !== "") {
		bJs = div2.querySelector(".bJs");
		bJs.onclick = () => {
			html.style.display = "none";
			css.style.display = "none";
			js.style.display = "block";
			if (window.innerWidth < 699) autoHeight(js);

			bHtml.className = "";
			bCss.className = "";
			bJs.className = "aktiv";
		};
	};
	bHtml.onclick = () => {
		html.style.display = "block";
		if (window.innerWidth < 699) autoHeight(html);
		css.style.display = "none";
		js.style.display = "none";

		bHtml.className = "aktiv";
		bCss.className = "";
		if (ifJs !== "") bJs.className = "";
	};
	bCss.onclick = () => {
		html.style.display = "none";
		css.style.display = "block";
		if (window.innerWidth < 699) autoHeight(css);
		js.style.display = "none";

		bHtml.className = "";
		bCss.className = "aktiv";
		if (ifJs !== "") bJs.className = "";
	};

	// bhtml.click();
	// bCss.click();
	// if (ifJs !== "") bJs.click();
	code.appendChild(div1);
	code.appendChild(div2);
});

// const textareas = document.querySelectorAll('textarea');

// textareas.forEach(textarea => {
// 	textarea.style.height = textarea.scrollHeight + "px";
// 	textarea.addEventListener("input", () => {
// 		textarea.style.height = textarea.scrollHeight + "px";
// 	});
// });
