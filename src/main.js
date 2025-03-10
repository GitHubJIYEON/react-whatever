import "./style.css";
import App from "../dist/App.js";
import { createElement } from "./createElement.js";

window.createElement = createElement;
const appElement = App();

console.log(JSON.stringify(appElement, null, 2));
