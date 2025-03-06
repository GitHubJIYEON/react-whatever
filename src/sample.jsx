export default function sample() {
    return (
        <div>
            <h1>Hello, Babel!</h1>
            <p>This is a JSX example.</p>
        </div>
    );
}

// npx babel ./src/sample.jsx --plugins @babel/plugin-transform-react-jsx
// export default function sample() {
//     return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, Babel!"), /*#__PURE__*/React.createElement("p", null, "This is a JSX example."));
//   }
