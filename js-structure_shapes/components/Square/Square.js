import { getRandomColor } from "../../utils/randomColor.js";

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

export { square };
