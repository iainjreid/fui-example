const { main, section, div, button } = require("@chaff/fui/core");

const app =
  main.add(section
    .add(div.of("Hello World"))
    .add(button.prop("onclick", () => console.log("Clicked")).of("Click me"))
  )

document.body.appendChild(app())
