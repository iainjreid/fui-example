const { main, section, div } = require("@chaff/fui/core");

const app =
  main.add(section.add(div.of("Hello World")))

document.body.appendChild(app())
