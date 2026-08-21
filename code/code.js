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

Object.keys(objects).forEach(key => {
	let div = document.createElement("div");
	div.id = key;
	// <svg viewBox="0 0 2 2" width="29px" height="29px"><path d="M0 0L1 1L2 0"/></svg>
	div.innerHTML = `<button><svg viewBox="0 0 4 4" width="29px" height="29px" stroke-width="0.28"><path d="M1 1.65l1 1l1 -1"/></svg></button><iframe></iframe>`;
	div.querySelector("iframe").srcdoc = `${objects[key].html}<style>${styleInIframe}${objects[key].css}</style><script>${objects[key].js}</script>`;
	code.appendChild(div);

	const js = objects[key].js !== "" ? '<button class="bJs">js</button>' : '';
	
	let div1 = document.createElement("div");
	div1.innerHTML = `<div class="buttons">
		<button class="bHtml">html</button>
		<button class="bCss">css</button>
		${js}
	</div>
	<p class="html"></p>
	<p class="css" style="display: none;"></p>
	<p class="js" style="display: none;"></p>`;
	div1.querySelector('.html').textContent = objects[key].html;
	div1.querySelector('.css').textContent = objects[key].css;
	div1.querySelector('.js').textContent = objects[key].js;
	code.appendChild(div1);

	let button = div.querySelector("button");
	button.onclick = () => {
		if (div1.style.display == "block") {
			button.querySelector("svg").style.scale = "1";
			div1.style.display = "none";
		}
		else {
			button.querySelector("svg").style.scale = "1 -1";
			div1.style.display = "block";
		}
	};

	let bHtml = div1.querySelector(".bHtml");
	bHtml.onclick = () => {
		div1.querySelector('.html').style.display = "block";
		div1.querySelector('.css').style.display = "none";
		div1.querySelector('.js').style.display = "none";
	};

	let bCss = div1.querySelector(".bCss");
	bCss.onclick = () => {
		div1.querySelector('.html').style.display = "none";
		div1.querySelector('.css').style.display = "block";
		div1.querySelector('.js').style.display = "none";
	};

	if (js !== "") {
		let bJs = div1.querySelector(".bJs");
		bJs.onclick = () => {
			div1.querySelector('.html').style.display = "none";
			div1.querySelector('.css').style.display = "none";
			div1.querySelector('.js').style.display = "block";
		};
	};
});
requestAnimationFrame(() => {
    document.body.focus();
    document.activeElement?.blur();
	document.querySelector(".button").click();
});
// document.activeElement.blur();
// requestAnimationFrame(() => document.querySelector(".button").click());
// window.focus();
