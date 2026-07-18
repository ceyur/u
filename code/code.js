import objects from "/u/code/objects.js";
const code = document.querySelector("#code");
Object.keys(objects).forEach(key => {
  let iframe = document.createElement("iframe");
  iframe.id = key;
  iframe.srcdoc = `${objects[key].html}
  <style>
  html,
  body {
  	margin: 0;
  	height: 100%;
  }
  body {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  ${objects[key].css}</style>`;
  code.appendChild(iframe);

  let div = document.querySelector("div");
  div.textContent = objects[key].html;
});
