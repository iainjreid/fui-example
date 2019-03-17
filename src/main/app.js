const { main, section, div } = require("@chaff/fui-core");

const app =
  main.add(section.add(div.add(() => document.createTextNode("Hello World"))))

document.body.appendChild(app())
