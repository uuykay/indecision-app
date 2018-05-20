"use strict";

var appRoot = document.getElementById("app");
var state = {
  show_details: false
};
var onShowDetails = function onShowDetails() {
  state.show_details = !state.show_details;
  render();
};
var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onShowDetails },
      state.show_details ? "Hide Details" : "Show Details"
    ),
    state.show_details ? React.createElement(
      "p",
      null,
      "Here are some details. Please read me."
    ) : ""
  );
  ReactDOM.render(template, appRoot);
};

render();
