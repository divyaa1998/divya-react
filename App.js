import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object => HTMLelement(render)

// const heading = React.createElement('h1',{id:'heading'},"Hello from  React");

// console.log(heading);

//react element
const Jsxheading = () => (
  <h1  className="hello" tabIndex={1}>
    Hello to React from JSX
  </h1>
);

//react component
// const HeadingComponent = () => {
//     return <h1>Heading from React Functional Component</h1>
// }
const number = 163551263;
const HeadingComponent = () => (
  <div id="container">
    {console.log('divya')}
    {Jsxheading()}
    <Jsxheading />
    <Jsxheading></Jsxheading>
    <h1 id="heading">Heading from React Functional Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
