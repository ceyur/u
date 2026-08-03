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
  div.querySelector("iframe").srcdoc = `${objects[key].html}<style>${styleInIframe}${objects[key].css}</style><script>${objects[key].js}</script>`;
  code.appendChild(div);

  let div1 = document.createElement("div");
  div1.innerHTML = `<p class="html"></p>
  <p class="css" style="display: none;"></p>
  <p class="js" style="display: none;"></p>
  <div>
    <button class="Bhtml"></button>
    <button class="Bcss"></button>
    <button class="Bjs"></button>
    <div class="circle"></div>
  </div>`;
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
      div1.querySelector("div").style.display = "none";
      div1.querySelector(".html").style.height = "initial";
      div1.querySelector(".css").style.display = "block";
      div1.querySelector(".css").style.height = "initial";
      div1.querySelector(".css").style.marginTop = "25px";
      if (objects[key].js != "") {
        div1.querySelector(".js").style.display = "block";
        div1.querySelector(".js").style.height = "initial";
        div1.querySelector(".js").style.marginTop = "25px";
      }
    }
  };
});
