console.log("App.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
  </div>
);

const user = {
  name: "William Kuang",
  age: 27,
  location: "Sydney"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const template2 = (
  <div>
    <h1>{user.name ? user.name : "Anon"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
  console.log("addOne", count);
};

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log("minusOne");
};

const reset = () => {
  count = 0;
  renderCounterApp();
  console.log("reset");
};

const appRoot = document.getElementById("app");
const renderCounterApp = () => {
  const template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="button">
        +1
      </button>
      <button onClick={minusOne} className="button">
        -1
      </button>
      <button onClick={reset} className="button">
        reset
      </button>
    </div>
  );

  ReactDOM.render(template3, appRoot);
};

renderCounterApp();
