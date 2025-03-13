export default function testTransfilling() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

// $ npm run babel ./src/testTransfilling.jsx
// export default function testTransfilling() {
//   return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello World"));
// }
