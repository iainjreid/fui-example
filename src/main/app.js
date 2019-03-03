const { main, section, div } = require("@chaff/fui-core");

const template = document.createElement('template');

document.body.appendChild(elementFromString(
  main(
    section(
      div(
        "Hello World"
      )
    )
  )
));

function elementFromString(str) {
  template.innerHTML = str.trim();
  return template.content.firstChild;
}
