import { init } from "../../shared/init";
import "../../shared/p5";

function app() {
  let img;

  function preload() {
    img = loadImage("/michelleobama.jpg");
  }

  function setup() {
    createCanvas(1000, 600);
    background(255);
    image(img, 0, 0);
  }

  function draw() {}
}

init(app);
