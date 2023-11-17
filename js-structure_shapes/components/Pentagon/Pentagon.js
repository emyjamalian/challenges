import { getRandomColor } from "../../utils/randomColor.js";

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

export { pentagon };
