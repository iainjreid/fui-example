const { main, section, div, button } = require("@chaff/fui/html");

const app =
  main.add(section
    .add(div.text("Hello World"))
    .add(button.prop("onclick", () => console.log("Clicked")).text("Click me"))
  )

document.body.appendChild(app())
