console.log("App.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    rerender();
  }
};

// create Remove All button above list
// on click -> wipe the array -> rerender
const resetAll = () => {
  app.options = [];
  rerender();
};

const numbers = [55, 101, 1000];

const appRoot = document.getElementById("app");
const rerender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={resetAll}>Reset All</button>

      {numbers.map((number, i) => <p key={i}>{number * 2}</p>)}

      {[<p key="1">Hello</p>, <p key="2">How's it going?</p>, <p key="3">Good thanks</p>]}
      <ol>{app.options.map((option, i) => <p key={i}>{option}</p>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
rerender();
