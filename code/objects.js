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
		"html": `<a id="arrow-round"></a>`,
		"css": `#arrow-round {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	box-shadow: 0 0 10px #000;
	border-radius: 50%;
	transition: 0.25s;
	u {
		position: absolute;
		width: 10px;
		height: 51px;
		background: #000;
		border-radius: 9px;
		margin-top: 6px;
	}
	&:before {
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
		content: "";
		position: absolute;
		width: 10px;
		height: 40px;
		background: #000;
		border-radius: 9px;
		margin: 0 0 21.6px 21.6px;
		rotate: -45deg;
	}
	&:hover {
		background: #9cdaff;
		box-shadow: 0 0 10px #00008b;
		scale: 1.15;
		u, 
		&:before, 
		&:after {
			background: blue;
		}
	}
}`,
		"js": ""
	}
};
