"use strict";

console.log("App.js is running");

var template = React.createElement(
  "p",
  null,
  "Does this change?"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
