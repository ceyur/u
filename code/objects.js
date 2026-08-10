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
	"": {
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
	}
}
