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
  //<svg viewBox="0 0 2 2" width="29px" height="29px"><path d="M0 0L1 1L2 0"/></svg>
  div.innerHTML = `<button><svg viewBox="0 0 4 4" width="29px" height="29px" stroke-width="0.28"><path d="M1 1.65l1 1l1 -1"/></svg></button><iframe></iframe>`;
  div.querySelector("iframe").srcdoc = `${objects[key].html}<style>${styleInIframe}${objects[key].css}</style>`;
  code.appendChild(div);
  let button = div.querySelector("button");

  let div1 = document.createElement("div");
  div1.innerHTML = `<p class="html"></p>
  <p class="css" style="display: none;"></p>
  <p class="js" style="display: none;"></p>`;
  div1.querySelector('.html').textContent = objects[key].html;
  div1.querySelector('.css').textContent = objects[key].css;
  div1.querySelector('.js').textContent = objects[key].js;
  code.appendChild(div1);

  button.onclick = () => {
    if (div1.style.display == "none") {
      div1.style.display = "block";
      button.style.scale = "1 -1";
    }
    else {
      div1.style.display = "none";
      button.style.scale = "1 -1";
    }
  };
});
