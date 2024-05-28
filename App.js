{
  /* <div id="parent">
    <div id="child">
        <h1>Im h1 tag</h1>
        <h2>Im h2 tag</h2>
    </div>
    <div id="child2">
        <h1>Im h1 tag</h1>
        <h2>Im h2 tag</h2>
    </div>
</div> */
}

const main = React.createElement(
  "div",
  { id: "parent" },
  [  React.createElement(
    "div",
    { id: "child" },
    [ React.createElement("h1", {}, "im h1 tag"), React.createElement("h2", {}, "im h2 tag")]
   
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [ React.createElement("h1", {}, "im h1 tag"), React.createElement("h2", {}, "im h2 tag")]
   
  )]

);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", name: "divya" },
//   "Welcome to React!!!!"
// );
console.log(main); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);
