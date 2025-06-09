import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", { id: "heading" }, "This is h1 Tag!"),
      React.createElement("h2", { id: "heading" }, "This is h2 Tag!"),
    ]
  ),
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", { id: "heading" }, "This is h1 Tag!"),
      React.createElement("h2", { id: "heading" }, "This is h2 Tag!"),
    ]
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
