export default {
	"parallelogram": {
		"html": `<div id="parallelogram"></div>`,
		"css": `#parallelogram {
	width: 150px;
	height: 112px;
	background: black;
	margin: 0 10px;
	transform: skew(-10deg);
}`,
		"js": ""
	},
	"rhomb": {
		"html": `<div id="rhomb"></div>`,
		"css": `#rhomb {
	width: 100px;
	height: 100px;
	background: black;
	margin: 19.3px;
	rotate: 45deg;
}`,
		"js": ""
	},
	"trapezoid": {
		"html": `<div id="trapezoid"></div>`,
		"css": `#trapezoid {
	width: 150px;
	border-bottom: 100px solid black;
	border-left: 30px solid transparent;
	border-right: 30px solid transparent;
}`,
		"js": ""
	},
	"triangle-top": {
		"html": `<div id="triangle-top"></div>`,
		"css": `#triangle-top {
	border-bottom: 84px solid black;
	border-right: 50px solid transparent;
	border-left: 50px solid transparent;
}`,
		"js": ""
	},
	"triangle-right": {
		"html": `<div id="triangle-right"></div>`,
		"css": `#triangle-right {
	border-left: 80px solid black;
	border-top: 42px solid transparent;
	border-bottom: 42px solid transparent;
}`,
		"js": ""
	},
	"triangle-bottom": {
		"html": `<div id="triangle-bottom"></div>`,
		"css": `#triangle-bottom {
	border-top: 84px solid black;
	border-right: 50px solid transparent;
	border-left: 50px solid transparent;
}`,
		"js": ""
	},
	"triangle-left": {
		"html": `<div id="triangle-left"></div>`,
		"css": `#triangle-left {
	border-right: 80px solid black;
	border-top: 42px solid transparent;
	border-bottom: 42px solid transparent;
}`,
		"js": ""
	},
	"close-square": {
		"html": `<a id="close-square"></a>`,
		"css": `#close-square {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	box-shadow: 0 0 10px #000;
	border-radius: 50%;
	transition: 0.25s;
	&:before, 
	&:after {
		content: "";
		position: absolute;
		width: 75px;
		height: 10px;
		background: #000;
		rotate: 45deg;
	}
	&:after {
		rotate: -45deg;
	}
	&:hover {
		background: #f9e3e2;
		box-shadow: 0 0 10px #8b0000;
		scale: 1.15;
		&:before, 
		&:after {
			background: red;
		}
	}
}`,
		"js": ""
	},
	"close-round": {
		"html": `<a id="close-round"></a>`,
		"css": `#close-round {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	box-shadow: 0 0 10px #000;
	border-radius: 50%;
	transition: 0.25s;
	&:before, 
	&:after {
		content: "";
		position: absolute;
		width: 75px;
		height: 10px;
		background: #000;
		border-radius: 5px;
		rotate: 45deg;
	}
	&:after {
		rotate: -45deg;
	}
	&:hover {
		background: #f9e3e2;
		box-shadow: 0 0 10px #8b0000;
		scale: 1.15;
		&:before, 
		&:after {
			background: red;
		}
	}
}`,
		"js": ""
	},
	"arrow-square": {
		"html": `<a id="arrow-square"></a>`,
		"css": `#arrow-square {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	box-shadow: 0 0 10px #000;
	border-radius: 50%;
	transition: 0.25s;
	&:before {
		content: "";
		position: absolute;
		width: 30px;
		height: 30px;
		border-top: 10px solid #000;
		border-left: 10px solid #000;
		rotate: 45deg;
	}
	&:after {
		content: "";
		position: absolute;
		width: 10px;
		height: 51px;
		background: #000;
		margin-top: 6px;
	}
	&:hover {
		background: #9cdaff;
		box-shadow: 0 0 10px #00008b
		scale: 1.15;
		&:before {
			border-color: blue;
		}
		&:after {
			background: blue;
		}
	}
}`,
		"js": ""
	},
	"arrow-round": {
		"html": `<a id="arrow-round">
	<div></div>
</a>`,
		"css": `#arrow-round {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	box-shadow: 0 0 10px #000;
	border-radius: 50%;
	transition: 0.25s;
	div {
		position: absolute;
		width: 10px;
		height: 51px;
		background: #000;
		border-radius: 9px;
		margin-top: 6px;
	}
	&:before,
	&:after {
		content: "";
		position: absolute;
		width: 10px;
		height: 40px;
		background: #000;
		border-radius: 9px;
		margin: 0 21.6px 21.6px 0;
		rotate: 45deg;
	}
	&:after {
		margin: 0 0 21.6px 21.6px;
		rotate: -45deg;
	}
	&:hover {
		background: #9cdaff;
		box-shadow: 0 0 10px #00008b;
		scale: 1.15;
		div, 
		&:before, 
		&:after {
			background: blue;
		}
	}
}`,
		"js": ""
	},
	"switch-light": {
		"html": `<input id="switch-light" type="checkbox">`,
		"css": `#switch-light {
	position: relative;
	width: 120px;
	height: 68px;
	visibility: hidden;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	&:before {
		content: "";
		display: block;
		visibility: visible;
		width: 120px;
		height: 68px;
		background: linear-gradient(white, #eee);
		box-shadow: 0 0 4px black;
		border-radius: 34px;
		transition: 0.25s;
	}
	&:after {
		content: "";
		display: block;
		visibility: visible;
		position: absolute;
		top: 0;
		width: 52px;
		height: 52px;
		margin: 8px;
		background: linear-gradient(white, #ddd);
		box-shadow: inset 0 0 2px #999;
		border-radius: 50%;
		transition: 0.25s;
	}
	&:hover {
		&:before {
			box-shadow: 0 0 10px black;
		}
	}
	&:checked {
		&:before {
			background: #222;
		}
		&:after {
			left: 52px;
			background: linear-gradient(#777, #3a3a3a);
			box-shadow: none;
		}
	}
}`,
		"js": ""
	},
	"switch-day": {
		"html": `<input id="switch-day" type="checkbox">`,
		"css": `#switch-day {
	position: relative;
	width: 120px;
	height: 68px;
	visibility: hidden;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	&:before {
		content: "";
		display: block;
		visibility: visible;
		width: 120px;
		height: 68px;
		background: #9cdaff;
		box-shadow: 0 0 4px #003399;
		border-radius: 34px;
		transition: 0.25s;
	}
	&:after {
		content: "";
		display: block;
		visibility: visible;
		position: absolute;
		top: 0;
		width: 52px;
		height: 52px;
		margin: 8px;
		background: linear-gradient(yellow, #ffb300);
		box-shadow: inset 0 0 2px #d8860b;
		border-radius: 50%;
		transition: 0.25s;
	}
	&:hover {
		&:before {
			box-shadow: 0 0 10px #003399;
		}
	}
	&:checked {
		&:before {
			background: #222;
			box-shadow: 0 0 4px black;
		}
		&:after {
			left: 52px;
			background: linear-gradient(#777, #3a3a3a);
			box-shadow: none;
		}
		&:hover {
			&:before {
				box-shadow: 0 0 10px black;
			}
		}
	}
}`,
		"js": ""
	},
	"switch-light-dark": {
		"html": `<label id="switch-light-dark">
	<input type="checkbox">
	<div>
		<svg id="light" viewBox="0 0 16 16">
			<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
		</svg>
		<svg id="dark" viewBox="0 0 16 16">
			<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
		</svg>
	</div>
</label>`,
		"css": `#switch-light-dark {
	width: 120px;
	height: 68px;
	position: relative;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	input {
		position: absolute;
		visibility: hidden;
		margin: 0;
		cursor: pointer;
		&:before {
			content: "";
			display: block;
			visibility: visible;
			width: 120px;
			height: 68px;
			background: linear-gradient(white, #eee);
			box-shadow: 0 0 4px black;
			border-radius: 34px;
			transition: 0.25s;
		}
		&:checked {
			&:before {
				background: #222;
			}
			+div {
				left: 52px;
				background: linear-gradient(#777, #3a3a3a);
				box-shadow: none;
				#light {
					display: none;
				}
				#dark {
					display: block;
				}	
			}
		}	
	}
	div {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		margin: 8px;
		background: linear-gradient(white, #ddd);
		box-shadow: inset 0 0 2px #999;
		border-radius: 50%;
		#light,
		#dark {
			width: 36px;
			height: 36px;
		}
		#dark {
			display: none;
		}
	}
	&:hover {
		input:before {
			box-shadow: 0 0 10px black;
		}
	}
}`,
		"js": ""
	},
	"switch-day-night": {
		"html": `<label id="switch-day-night">
	<input type="checkbox">
	<div>
		<svg id="day" viewBox="0 0 16 16">
			<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
		</svg>
		<svg id="night" viewBox="0 0 16 16">
			<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
		</svg>
	</div>
</label>`,
		"css": `#switch-day-night {
	width: 120px;
	height: 68px;
	position: relative;
	-webkit-tap-highlight-color: transparent;
	input {
		position: absolute;
		visibility: hidden;
		margin: 0;
		cursor: pointer;
		&:before {
			content: "";
			display: block;
			visibility: visible;
			width: 120px;
			height: 68px;
			background: #9cdaff;
			border-radius: 34px;
			transition: 0.25s;
		}
		&:after {
			content: "";
			display: block;
			visibility: visible;
			position: absolute;
			top: 0;
			z-index: 1;
			width: 120px;
			height: 68px;
			box-shadow: 0 0 4px #003399;
			border-radius: 34px;
			transition: 0.25s;
		}
		&:hover {
			&:after {
				box-shadow: 0 0 10px #003399;
			}
		}
		&:checked {
			&:before {
				background: #222;
			}
			&:after {
				box-shadow: 0 0 4px black;	
			}
			+div {
				left: 52px;
				background: linear-gradient(#777, #3a3a3a);
				box-shadow: none;
				#day {
					display: none;
				}
				#night {
					display: block;
				}	
			}
			&:hover {
				&:after {
					box-shadow: 0 0 10px black;
				}
			}
		}	
	}
	div {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		margin: 8px;
		background: linear-gradient(yellow, #ffb300);
		box-shadow: inset 0 0 2px #d8860b;
		border-radius: 50%;
		#day,
		#night {
			width: 36px;
			height: 36px;
		}
		#night {
			display: none;
		}
	}
}`,
		"js": ""
	},
	"calculation": {
		"html": `<main id="calculation">
	<input id="text" style="font-family: 'Times New Roman';"></input>
	<div>
		<a id="c">C</a>
		<a id="del" style="font-size: 15px;">⌫</a>
		<a id="pi">π</a>
		<a id="sum" style="font-weight: bold;">+</a>
		<a id="number7">7</a>
		<a id="number8">8</a>
		<a id="number9">9</a>
		<a id="minus" style="font-weight: bold;">−</a>
		<a id="number4">4</a>
		<a id="number5">5</a>
		<a id="number6">6</a>
		<a id="mult">𐄂</a>
		<a id="number1">1</a>
		<a id="number2">2</a>
		<a id="number3">3</a>
		<a id="div" style="font-size: 20px;">÷</a>
		<a id="point">,</a>
		<a id="number0">0</a>
		<a id="run">=</a>
	</div>
</main>`,
	"css": `* {
	margin: 0;
	padding: 0;
	user-select: none;
}
#calculation {
	padding: 30px;
	width: 165px;
	height: 245px;
	border: 1px solid black;
	background: rgba(0, 0, 0, 0.06);
	border-radius: 15px;
	input {
		margin: 0 0 16.5px;
		width: 165px;
		background: white;
		border: 1px solid black;
		border-radius: 5px;
		text-align: right;
		&:hover {
			border: 1px solid blue;
		}
	}
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		a {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			margin: 0 15px 15px 0;
			width: 28px;
			height: 28px;
			background: white;
			border: 1px solid black;
			border-radius: 5px;
			&:nth-child(4),
			&:nth-child(8),
			&:nth-child(12),
			&:nth-child(16),
			&:nth-child(19) {
				margin-right: 0;
			}
			&:nth-child(17),
			&:nth-child(18),
			&:nth-child(19) {
				margin-bottom: 0;
			}
			&:last-child {
				width: 73px;
			}
			&:hover {
				border: 1px solid blue;
			}
		}
	}
}`,
		"js": `const text = document.querySelector("#text")

const create = {
	calculation: function() {
		for (let key in buttons) {
			document.querySelector("#" + key).onclick = buttons[key]
		}
	},
	keydown: function() {
		text.addEventListener("keydown", (e) => {
			if (!["Delete", "Backspace", "ArrowRight", "ArrowLeft"].includes(e.key)) {
				calculation.div_null()
				e.preventDefault()
			}
			if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)) {
				calculation.number(e.key)
			}
			if ([",", "."].includes(e.key)) {
				buttons.point()
			}
			if (["+", "-", "*", ":", "/"].includes(e.key)) {
				calculation.operation(e.key)
			}
			if (["Enter", "="].includes(e.key)) {
				buttons.run()
			}
		})
	}
}

const calculation = {
	div_null: function() {
		if (text.value == "Нельзя делить на 0") {
			text.value = ""
		}
	},
	operation: function(symbol) {
		calculation.div_null()
		if (!["+", "-", "×", ":", ","].includes(text.value.slice(-1))) {
			if (text.value != "") {
				if (["+", "-"].includes(symbol)) text.value += symbol
				if (["*", "×"].includes(symbol)) text.value += "×"
				if ([":", "/"].includes(symbol)) text.value += ":"
			}
			else if (symbol == "-") {
				text.value += "-"
			}
		}
	},
	number: function(symbol) {
		calculation.div_null()
		if (text.value == "") {
			text.value += symbol
		}
		else if (!["π", "0"].includes(text.value.slice(-1))) {
			text.value += symbol
		}
		else if (text.value.length > 1 & text.value.slice(-1) == "0" & !["+", "-", "×", ":"].includes(text.value.slice(-2, -1))) {
			text.value += symbol
		}
	}
}

const buttons = {
	c: function() {
		text.value = ""
	},
	del: function() {
		calculation.div_null()
		text.value = text.value.slice(0, -1)
	},
	pi: function() {
		calculation.div_null()
		if (!["π", ","].includes(text.value.slice(-1))) {
			text.value += "π"
		}
	},
	point: function() {
		calculation.div_null()
		if (!["+", "-", "×", ":", "π", ","].includes(text.value.slice(-1))) {
			for (let i = text.value.length - 1; i >= 0; i--) {
				if (text.value[i] == ",") break
				if (i == 0 | ["+", "-", "×", ":"].includes(text.value[i])) {
					text.value += ","
					break
				}
			}
		}
	},
	run: function() {
		calculation.div_null()
		if (text.value != "" & !["+", "-", "×", ":", ","].includes(text.value.slice(-1))) {
			if (text.value.includes(":0+") | text.value.includes(":0-") | text.value.includes(":0×") | text.value.includes(":0:") | text.value.slice(-1) == "0" & text.value.slice(-2, -1) == ":") {
				text.value = "Нельзя делить на 0"
			}
			else {
				text.value = text.value.replace("×", "*").replace(":", "/").replace(",", ".")
				while (text.value.includes("π")) {
					let index_pi = text.value.indexOf("π")
					if (index_pi == 0 | ["+", "-", "*", "/"].includes(text.value[index_pi - 1])) {
						text.value = text.value.slice(0, index_pi) + "3.14" + text.value.slice(index_pi + 1)
					}
					else {
						text.value = text.value.slice(0, index_pi) + "*3.14" + text.value.slice(index_pi + 1)
					}
				}
				text.value = String(eval(text.value)).replace(".", ",")
			}
		}
	},

	sum: () => calculation.operation("+"),
	minus: () => calculation.operation("-"),
	mult: () => calculation.operation("×"),
	div: () => calculation.operation(":"),

	number0: () => calculation.number("0"),
	number1: () => calculation.number("1"),
	number2: () => calculation.number("2"),
	number3: () => calculation.number("3"),
	number4: () => calculation.number("4"),
	number5: () => calculation.number("5"),
	number6: () => calculation.number("6"),
	number7: () => calculation.number("7"),
	number8: () => calculation.number("8"),
	number9: () => calculation.number("9")
}

create.keydown()
create.calculation()`
	},
	"snake": {
		"html": `<main id="snake">
	<button id="start">Старт</button>
	<button id="replay">Вы проиграли! Попробовать снова</button>
	<button id="win">Вы прошли игру! Попробовать снова</button>
	<div id="coins">0</div>
	<div id="table"></div>
</main>`,
		"css": `* {
	margin: 0;
	padding: 0;
	user-select: none;
}
#snake {
	width: 225px;
	height: 245px;
	border: 1px solid #000;
	button {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 1;
		width: 100px;
		height: 50px;
	}
	#replay,
	#win {
		display: none;
		width: 150px;
		height: 60px;
	}
	#table {
		display: flex;
		flex-wrap: wrap;
		width: 225px;
		height: 225px;
		div {
			width: 23px;
			height: 23px;
			border: 1px solid #000;
			display: flex;
			align-items: center;
			justify-content: center;
			&:before {
				content: "";
			}
		}
		.head:before {
			background: #000;
			width: 15px;
			height: 15px;
		}
		.body:before {
			background: #000;
			width: 13px;
			height: 13px;
		}
		.apple:before {
			background: green;
			width: 17px;
			height: 17px;
			border-radius: 50%;
		}
	}
	#coins {
		height: 18px;
		text-align: center;
		border: 1px solid #000;
	}
}`,
		"js": `const table = document.querySelector("#table")
const start = document.querySelector("#start")
const replay = document.querySelector("#replay")
const win = document.querySelector("#win")
const coins = document.querySelector("#coins")

const vectors = {
	top: [0, -1],
	right: [1, 0],
	bottom: [0, 1],
	left: [-1, 0]
}

const operation = {
	inXY: function(i) {
		let x = i % 9
		let y = Math.floor(i / 9)
		return [x, y]
	},
	inI: function(x, y) {
		let i = y * 9 + x
		return i
	}
}

const create = {
	table: function() {
		for (let i = 0; i < 81; i++) {
			table.appendChild(document.createElement("div"))
		}
	},
	keydown: function() {
		window.addEventListener("keydown", (e) => {
			e.preventDefault()
			switch (e.key) {
				case "ArrowUp": {
					if (vector != vector.bottom) vector = vectors.top
					break
				}
				case "ArrowRight": {
					if (vector != vectors.left) vector = vectors.right
					break
				}
				case "ArrowDown": {
					if (vector != vectors.top) vector = vectors.bottom
					break
				}
				case "ArrowLeft": {
					if (vector != vectors.right) vector = vectors.left
					break
				}
			}
		})
	},
	swipe: function() {
		window.addEventListener("touchstart", (e) => {
			startX = e.touches[0].clientX
			startY = e.touches[0].clientY
		})

		window.addEventListener("touchmove", (e) => e.preventDefault(), {passive: false})

		// window.addEventListener("touchmove", (e) => {
		// 	e.preventDefault()
		// }, { passive: false })

		window.addEventListener("touchend", (e) => {
			endX = e.changedTouches[0].clientX
			endY = e.changedTouches[0].clientY

			if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
				if (endX - startX > 50 & vector != vectors.left) vector = vectors.right
				if (endX - startX < -50 & vector != vectors.right) vector = vectors.left
			}
			else {
				if (endY - startY > 50 & vector != vectors.top) vector = vectors.bottom
				if (endY - startY < -50 & vector != vectors.bottom) vector = vectors.top
			}
		})
	},
}

const game = {
	new_play: function() {
		start.style.display = "none"
		replay.style.display = "none"
		win.style.display = "none"
		snake_i = [38, 39, 40]
		apple_i = 42
		vector = vectors.right
		coins.textContent = "0"
		game.write()
		timer = setInterval(game.run, 800)
	},
	end: function(button) {
		clearInterval(timer)
		Array.from(table.children).forEach((e) => {
			e.className = ""
		})
		button.style.display = "block"
	},
	write: function() {
		snake_i.forEach((e) => {
			table.children[e].className = "body"
		})
		table.children[snake_i[snake_i.length - 1]].className = "head"
		table.children[apple_i].className = "apple"
	},
	new_head: function() {
		let [x, y] = operation.inXY(snake_i[snake_i.length - 1])
		let [dx, dy] = vector;
		let [next_x, next_y] = [x + dx, y + dy]
		let next_i = operation.inI(next_x, next_y)
		return [next_i, next_x, next_y]
	},
	run: function() {
		let [new_i, new_x, new_y] = game.new_head()

		if (new_x > 8 | new_y > 8 | new_x < 0 | new_y < 0) {
			game.end(replay)
		}
		else if (snake_i.includes(new_i)) {
			game.end(replay)
		}
		else if (new_i == apple_i) {
			snake_i.push(new_i)

			coins.textContent = parseInt(coins.textContent) + 1
			if (coins.textContent == 78) end(win)
			
			let apple_x, apple_y
			while (true) {
				apple_x = Math.floor(Math.random() * 9)
				apple_y = Math.floor(Math.random() * 9)
				if (!snake_i.includes(operation.inI(apple_x, apple_y))) break
			}

			apple_i = operation.inI(apple_x, apple_y)
			game.write()
		}
		else {
			snake_i.push(new_i)
			table.children[snake_i[0]].className = ""
			snake_i.shift()
			game.write()
		}
	}
}

create.table()
create.keydown()
create.swipe()
start.onclick = game.new_play
replay.onclick = game.new_play
win.onclick = game.new_play`
	},
	"tic-tac-toe": {
		"html": `<main id="tic-tac-toe">
	<button id="start">Старт</button>
	<button id="win"></button>
	<header>
		<div id="firstPlayer"></div>
		<div id="secondPlayer"></div>
	</header>
	<div id="table">
		<p id="0"></p>
		<p id="1"></p>
		<p id="2"></p>
		<p id="3"></p>
		<p id="4"></p>
		<p id="5"></p>
		<p id="6"></p>
		<p id="7"></p>
		<p id="8"></p>
	</div>
	<footer></footer>
	<div id="block"></div>
</main>`,
		"css": `* {
	margin: 0;
	padding: 0;
	user-select: none;
}
#tic-tac-toe {
	button {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 1;
		width: 100px;
		height: 50px;
	}
	#win {
		display: none;
		width: 175px;
		height: 60px;
	}
	header {
		display: flex;
		justify-content: space-between;
		div {
			height: 18px;
		}
	}
	footer {
		height: 18px;
	}
	#table {
		display: flex;
		flex-wrap: wrap;
		width: 240px;
		height: 240px;
		border: 1px solid #000;
		p {
			width: 78px;
			height: 78px;
			border: 1px solid #000;
			position: relative;
		}
		.X {
			&:before,
			&:after {
				content: "";
				width: 50px;
				height: 10px;
				background: #000;
				rotate: 45deg;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
			}
			&:after {
				rotate: -45deg;
			}
		}
		.O {
			&:before {
				content: "";
				width: 30px;
				height: 30px;
				border: 10px solid #000;
				border-radius: 50%;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
			}
		}
		.Xlast {
			&:before,
			&:after {
				background: #999;
			}
		}
		.Olast {
			&:before {
				border: 10px solid #999;
			}
		}
	}
}
#block {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
}`,
		"js": `const start = document.querySelector("#start")
const win = document.querySelector("#win")
const firstPlayer = document.querySelector("#firstPlayer")
const secondPlayer = document.querySelector("#secondPlayer")
const block = document.querySelector("#block")
const table = document.querySelector("#table")
let player = 1
let list = [ 8, 8, 8, 8, 8, 8, 8, 8, 8 ]
let history = []

start.onclick = () => {
	firstPlayer.textContent = "Ходит 1 игрок"
	block.style.display = "none"
	start.style.display = "none"
}
win.onclick = () => {
	leftText.textContent = "Ходит 1 игрок"
	block.style.display = "none"
	win.style.display = "none"
	player = 1
	history = []
	list = [ 8, 8, 8, 8, 8, 8, 8, 8, 8 ]
	document.querySelectorAll("p").forEach((e) => e.className = "")
}

document.querySelectorAll("p").forEach((e) => {
	e.onclick = () => {
		if (e.classList.length == 0) {
			if (player == 1) {
				history.push(e)
				list[e.id] = 1
				e.className = "X"
				firstPlayer.textContent = ""
				secondPlayer.textContent = "Ходит 2 игрок"
				player++
			}
			else {
				history.push(e)
				list[e.id] = 0
				e.className = "O"
				firstPlayer.textContent = "Ходит 1 игрок"
				secondPlayer.textContent = ""
				player--
			}
			if (history.length > 6) {
				history[0].className = ""
				history.shift()
			}
			if (history.length == 6) {
				if (history[0].className == "X") history[0].classList.add("Xlast")
				if (history[0].className == "O") history[0].classList.add("Olast")
			}
			if (list[0] == 1 && list[1] == 1 && list[2] == 1 ||
				list[3] == 1 && list[4] == 1 && list[5] == 1 ||
				list[6] == 1 && list[7] == 1 && list[8] == 1 ||
				list[0] == 1 && list[3] == 1 && list[6] == 1 ||
				list[1] == 1 && list[4] == 1 && list[7] == 1 ||
				list[2] == 1 && list[5] == 1 && list[8] == 1 ||
				list[0] == 1 && list[4] == 1 && list[8] == 1 ||
				list[2] == 1 && list[4] == 1 && list[6] == 1) {
				win.style.display = "block"
				win.textContent = "Первый игрок победил! Сыграть ещё"
				block.style.display = "block"
				firstPlayer.textContent = ""
				secondPlayer.textContent = ""
			}
			if (list[0] == 0 && list[1] == 0 && list[2] == 0 ||
				list[3] == 0 && list[4] == 0 && list[5] == 0 ||
				list[6] == 0 && list[7] == 0 && list[8] == 0 ||
				list[0] == 0 && list[3] == 0 && list[6] == 0 ||
				list[1] == 0 && list[4] == 0 && list[7] == 0 ||
				list[2] == 0 && list[5] == 0 && list[8] == 0 ||
				list[0] == 0 && list[4] == 0 && list[8] == 0 ||
				list[2] == 0 && list[4] == 0 && list[6] == 0) {
				win.style.display = "block"
				win.textContent = "Второй игрок победил! Сыграть ещё"
				block.style.display = "block"
				firstPlayer.textContent = ""
				secondPlayer.textContent = ""
			}
		}
	}
})`
	},
	"shess": {
		"html": `<main id="shess">
	<button id="start">Старт</button>
	<button id="win">Вы выиграли! Попробовать снова</button>
	<header>
		<div id="firstPlayer"></div>
		<div id="secondPlayer"></div>
	</header>
	<div id="table"></div>
	<footer></footer>
	<div id="block"></div>
</main>`,
		"css": `* {
	margin: 0;
	padding: 0;
	user-select: none;
}
#shess {
	button {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		z-index: 1;
		width: 100px;
		height: 50px;
	}
	#win {
		display: none;
		width: 150px;
		height: 60px;
	}
	header {
		display: flex;
		justify-content: space-between;
		div {
			height: 18px;
		}
	}
	footer {
		height: 18px;
	}
	#table {
		display: flex;
		flex-wrap: wrap;
		width: 240px;
		height: 240px;
		border: 1px solid #000;
		div {
			width: 28px;
			height: 28px;
			border: 1px solid #000;
		}
	}
	#block {
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}
	.wpawn {
		background: url(/u/img/shess/wpawn.png) center/100% 100%;
	}
	.bpawn {
		background: url(/u/img/shess/bpawn.png) center/100% 100%;
	}
	.wrook {
		background: url(/u/img/shess/wrook.png) center/100% 100%;
	}
	.brook {
		background: url(/u/img/shess/brook.png) center/100% 100%;
	}
	.wknight {
		background: url(/u/img/shess/wknight.png) center/100% 100%;
	}
	.bknight {
		background: url(/u/img/shess/bknight.png) center/100% 100%;
	}
	.wbishop {
		background: url(/u/img/shess/wbishop.png) center/100% 100%;
	}
	.bbishop {
		background: url(/u/img/shess/bbishop.png) center/100% 100%;
	}
	.wking {
		background: url(/u/img/shess/wking.png) center/100% 100%;
	}
	.bking {
		background: url(/u/img/shess/bking.png) center/100% 100%;
	}
	.wqueen {
		background: url(/u/img/shess/wqueen.png) center/100% 100%;
	}
	.bqueen {
		background: url(/u/img/shess/bqueen.png) center/100% 100%;
	}
}`,
		"js": `const start = document.querySelector("#start")
const win = document.querySelector("#win")
const firstPlayer = document.querySelector("#firstPlayer")
const secondPlayer = document.querySelector("#lastPlayer")
const table = document.querySelector("#table")
const block = document.querySelector("#block")

const players = {
	white: "w",
	black: "b"
}

const operations = {
	inXY: function(i) {
		let x = i % 8
		let y = Math.floor(i / 8)
		return [x, y]
	},
	inI: function(x, y) {
		let i = y * 8 + x
		return i
	}
}

const create = {
	table: function() {
		for (let i = 0; i < 64; i++) {
			table.appendChild(document.createElement("div"))
		}
	},
	game: function() {
		Array.from(table.children).forEach((e) => {
			e.className = ""
		})
		for (let key in new_pieces) {
			table.children[key].className = newPieces[key]
		}
		Array.from(table.children).forEach((e, index) => {
			e.onclick = () => pieces.click(e, index)
		})
		clickPiece = {
			on: false,
			class: "",
			i: 0,
			x: 0,
			y: 0
		}
		player = players.white
	}
}

const buttons = {
	start: function() {
		start.style.display = "none"
		block.style.display = "none"
	},
	win: function() {
		create.game()
		win.style.display = "none"
		block.style.display = "none"
	}
}

const pieces = {
	click: function(e, index) {
		if (!clickPiece.on & e.className[0] == player) {
			[clickX, clickY] = operations.inXY(index)
			clickPiece = {
				on: true,
				class: e.className,
				i: index,
				x: clickX,
				y: clickY
			}
			e.style.outline = "black solid 2px"
		}
		else if (e.style.outline == "black solid 2px") {
			e.style.outline = "none"
			clickPiece.on = false
		}
		else if (pieces[clickPiece.class.slice(1)].run(e, index) & e.className[0] != clickPiece.class[0]) {
			if (["wking", "bking"].includes(e.className)) {
				win.style.display = "block"
				block.style.display = "block"
			}

			clickPiece.on = false
			e.className = clickPiece.class
			player = (player == players.black) ? players.white : players.black
			table.children[clickPiece.i].style.outline = "none"
			table.children[clickPiece.i].className = ""
			
			if (player == players.white) {
				firstPlayer.textContent = "Ходит 1 игрок"
				secondPlayer.textContent = ""
			}
			else {
				firstPlayer.textContent = ""
				secondPlayer.textContent = "Ходит 2 игрок"
			}
		}
	},
	pawn: {
		name: "pawn",
		run: function(e, index) {
			let [newX, newY] = operations.inXY(index)
			let [dx, dy] = [Math.abs(clickPiece.x - newX), clickPiece.y - newY]

			if ((dx == 0 & e.className == "" | dx == 1 & e.className != "") &
				(dy == -1 & clickPiece.class[0] == players.white | dy == 1 & clickPiece.class[0] == players.black)) return true
			if (dx == 0 & Math.abs(dy) == 2 & (clickPiece.y == 1 & table.children[operations.inI(clickPiece.x, 2)].className == "" |
				clickPiece.y == 6 & table.children[operations.inI(clickPiece.x, 5)].className == "")) return true
		}
	},
	rook: {
		name: "rook",
		run: function(e, index) {
			let [newX, newY] = operations.inXY(index)
				if (newX != clickPiece.x & newY != clickPiece.y) return false

			let [dx, dy] = [Math.abs(clickPiece.x - newX), Math.abs(clickPiece.y - newY)]
				if (dx + dy < 2) return true

			let small, big
			if (dx == 0) {
				dx = dy
				[small, big] = [Math.min(clickPiece.y, newY), Math.max(clickPiece.y, newY)]
			}
			else {
				[small, big] = [Math.min(clickPiece.x, newX), Math.max(clickPiece.x, newX)]
			}

			for (let j = small + 1; j < big; j++) {
				if (clickPiece.x == newX & table.children[operations.inI(clickPiece.x, j)].className != "" |
					clickPiece.y == newY & table.children[operations.inI(j, clickPiece.y)].className != "") return false
			}
			return true
		}
	},
	knight: {
		name: "knight",
		run: function(e, index) {
			let [newX, newY] = operations.inXY(index)
			let [dx, dy] = [Math.abs(clickPiece.x - newX), Math.abs(clickPiece.y - newY)]

			if (dx + dy == 3 & dx < 3 & dy < 3) return true
		}
	},
	bishop: {
		name: "bishop",
		run: function(e, index) {
			let [newX, newY] = operations.inXY(index)
				if (newX == clickPiece.x | newY == clickPiece.y) return false

			let [dx, dy] = [Math.abs(clickPiece.x - newX), Math.abs(clickPiece.y - newY)]
				if (dx + dy < 2) return true
				if (dx != dy) return false

			let [small, big] = [Math.min(clickPiece.x, newX), Math.max(clickPiece.x, newX)]
			
			for (let j = small + 1; j < big; j++) {
				(newX > clickPiece.x) ? newX-- : newX++
				(newY > clickPiece.y) ? newY-- : newY++

				if (table.children[operations.inI(newX, newY)].className != "") return false
			}
			return true
		} 
	},
	king: {
		name: "king",
		run: function(e, index) {
			let [newX, newY] = operations.inXY(index)
			let [dx, dy] = [Math.abs(clickPiece.x - newX), Math.abs(clickPiece.y - newY)]

			if (dx + dy < 3 & dx < 2 & dy < 2) return true
		}
	},
	queen: {
		name: "queen",
		run: function(e, index) {
			return pieces.rook.run(e, index) | pieces.bishop.run(e, index)
		}
	}
}

const newPieces = {
	0: players.white + pieces.rook.name,
	1: players.white + pieces.knight.name,
	2: players.white + pieces.bishop.name,
	3: players.white + pieces.king.name,
	4: players.white + pieces.queen.name,
	5: players.white + pieces.bishop.name,
	6: players.white + pieces.knight.name,
	7: players.white + pieces.rook.name,
	8: players.white + pieces.pawn.name,
	9: players.white + pieces.pawn.name,
	10: players.white + pieces.pawn.name,
	11: players.white + pieces.pawn.name,
	12: players.white + pieces.pawn.name,
	13: players.white + pieces.pawn.name,
	14: players.white + pieces.pawn.name,
	15: players.white + pieces.pawn.name,
	48: players.black + pieces.pawn.name,
	49: players.black + pieces.pawn.name,
	50: players.black + pieces.pawn.name,
	51: players.black + pieces.pawn.name,
	52: players.black + pieces.pawn.name,
	53: players.black + pieces.pawn.name,
	54: players.black + pieces.pawn.name,
	55: players.black + pieces.pawn.name,
	56: players.black + pieces.rook.name,
	57: players.black + pieces.knight.name,
	58: players.black + pieces.bishop.name,
	59: players.black + pieces.king.name,
	60: players.black + pieces.queen.name,
	61: players.black + pieces.bishop.name,
	62: players.black + pieces.knight.name,
	63: players.black + pieces.rook.name
}

create.table()
create.game()
start.onclick = buttons.start
win.onclick = buttons.win`
	}
};
