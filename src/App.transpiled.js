export default function App() {
  return createElement(
    "div",
    {
      id: "app",
    },
    createElement("h1", null, "Hello world"),
    createElement("p", null, "custom Virtual DOM!"),
    createElement(
      "ul",
      null,
      createElement("li", null, "Javascript"),
      createElement("li", null, "React")
    )
  );
}
