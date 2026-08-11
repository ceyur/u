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
		width: 75%;
		height: 10%;
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
		width: 75%;
		height: 10%;
		background: #000;
		border-radius: 5%;
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
		width: 30%;
		height: 30%;
		border-top: 10px solid #000;
		border-left: 10px solid #000;
		rotate: 45deg;
	}
	&:after {
		content: "";
		position: absolute;
		width: 10%;
		height: 51%;
		background: #000;
		margin-top: 6%;
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
		width: 10%;
		height: 51%;
		background: #000;
		border-radius: 9%;
		margin-top: 6%;
	}
	&:before,
	&:after {
		content: "";
		position: absolute;
		width: 10%;
		height: 40%;
		background: #000;
		border-radius: 9%;
		margin: 0 21.6% 21.6% 0;
		rotate: 45deg;
	}
	&:after {
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
	}
};
