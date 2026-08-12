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
	}
};
