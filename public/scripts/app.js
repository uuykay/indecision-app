"use strict";

console.log("App.js is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    rerender();
  }
};

// create Remove All button above list
// on click -> wipe the array -> rerender
var resetAll = function resetAll() {
  app.options = [];
  rerender();
};

var numbers = [55, 101, 1000];

var appRoot = document.getElementById("app");
var rerender = function rerender() {
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
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: resetAll },
      "Reset All"
    ),
    numbers.map(function (number, i) {
      return React.createElement(
        "p",
        { key: i },
        number * 2
      );
    }),
    [React.createElement(
      "p",
      { key: "1" },
      "Hello"
    ), React.createElement(
      "p",
      { key: "2" },
      "How's it going?"
    ), React.createElement(
      "p",
      { key: "3" },
      "Good thanks"
    )],
    React.createElement(
      "ol",
      null,
      app.options.map(function (option, i) {
        return React.createElement(
          "p",
          { key: i },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
rerender();
