import { init } from "../../shared/init";
import "../../shared/p5";

/**
 * All code must go inside here. This ensures that your scripts run after the
 * html documents has finished loading and is ready to accept events.
 */
function app() {
  function updateText() {
    document.getElementById("demo").innerHTML = "Bienvenida Fiorella!";
  }

  document.querySelector("button[name=entrar]").onclick = updateText;
}

init(app);
