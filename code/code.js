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
  let iframe = document.createElement("iframe");
  iframe.id = key;
  iframe.srcdoc = `${objects[key].html}
  <style>${styleInIframe}${objects[key].css}</style>`;
  code.appendChild(iframe);

  let div = document.createElement("div");
  let html = objects[key].html;
  let css = objects[key].css;
  let js = objects[key].js;
  div.innerHTML = `<p class="html">${html}</p>
  <p class="css" style="display: none;">${css}</p>
  <p class="js" style="display: none;">${js}</p>`;
  code.appendChild(div);
});
