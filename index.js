import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";

if (module.hot) {
  module.hot.accept();
}

const options = {
  strings: ["<i>Front-End Developer</i> ."],
  typeSpeed: 40,
};

var typed = new Typed(".typo", options);

VanillaTilt.init(document.querySelectorAll(".button"), {
  max: 35,
  speed: 400,
  scale: 1.2,
  glare: true,
  "max-glare": 0.5,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".button"));
