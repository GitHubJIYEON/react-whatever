import "./style.css";
import App from "./App.transpiled.js";
import { createElement } from "./createElement.js";

window.createElement = createElement;
const appElement = App();

console.log(JSON.stringify(appElement, null, 2));

// console.log 결과

// {
//   "type": "div",
//   "props": {
//     "id": "app",
//     "children": [
//       {
//         "type": "h1",
//         "props": {
//           "children": "Hello world"
//         }
//       },
//       {
//         "type": "p",
//         "props": {
//           "children": "custom Virtual DOM!"
//         }
//       },
//       {
//         "type": "ul",
//         "props": {
//           "children": [
//             {
//               "type": "li",
//               "props": {
//                 "children": "Javascript"
//               }
//             },
//             {
//               "type": "li",
//               "props": {
//                 "children": "React"
//               }
//             }
//           ]
//         }
//       }
//     ]
//   }
// }
