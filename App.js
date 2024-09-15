// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "h1_heading" },
//   "Hello World By React!!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// ///////////////////////////////////////////////////////////////////////////////

/**
 * To create nested elements i.e
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am a H1 Tag</h1>
 *          <h2>I am a H2 Tag</h2>
 *      </div>
 * </div>
 *
 * ==> React Element i.e createElement returns an object not a html tag.
 *
 */

const nestedHeading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedHeading);
