

import { headers } from "/header/header.js";
import { footer } from "/footer/footer.js";
import { animationDOWNUP } from "/communJS/animation.js";

document.addEventListener("DOMContentLoaded", (event) => {
    headers()
    footer()
  });

  animationDOWNUP(".hidden1")