"use strict";

console.log("App.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No options"
  )
);

var user = {
  name: "William Kuang",
  age: 27,
  location: "Sydney"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anon"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var count = 0;
var addOne = function addOne() {
  console.log("addOne");
};
var template3 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne, id: "my-id", className: "button" },
    "+1"
  ),
  React.createElement(
    "button",
    {
      onClick: function onClick() {
        console.log("minusOne");
      },
      id: "my-id2",
      className: "button"
    },
    "-1"
  ),
  React.createElement(
    "button",
    {
      onClick: function onClick() {
        console.log("reset");
      },
      id: "my-id3",
      className: "button"
    },
    "reset"
  )
);
console.log(template3);
var appRoot = document.getElementById("app");

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function log "reset"

ReactDOM.render(template3, appRoot);
