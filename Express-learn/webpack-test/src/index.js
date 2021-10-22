import img from "../pics/pexels-photo-2552130.jpeg";
import svg from "../pics/primary-aim.svg";

class Game {
  name = "ROV";
}
const myGame = new Game();
const p = document.createElement(`p`);
p.textContent = `I like ${myGame.name}`;

const heading = document.createElement("h1");
heading.textContent = "Intesting!";

const app = document.querySelector("#root");
app.append(heading);
app.append(p);

const img1 = document.createElement("img");
img1.src = img;
app.append(img1);

const img2 = document.createElement("img");
img2.src = svg;
app.append(img2);
