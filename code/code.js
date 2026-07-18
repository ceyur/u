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
  div.innerHTML = `<p class="html"></p>
  <p class="css" style="display: none;"></p>
  <p class="js" style="display: none;"></p>`;
  div.querySelector('.html').textContent = objects[key].html;
  div.querySelector('.css').textContent = objects[key].css;
  div.querySelector('.js').textContent = objects[key].js;
  code.appendChild(div);
});
