import { square } from "./components/Square/Square.js";
import { circle } from "./components/Circle/circle.js";
import { pentagon } from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

root.append(circle, square, pentagon);
