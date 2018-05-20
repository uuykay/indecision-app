const appRoot = document.getElementById("app");
const state = {
  show_details: false
};
const onShowDetails = () => {
  state.show_details = !state.show_details;
  render();
};
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetails}>
        {state.show_details ? "Hide Details" : "Show Details"}
      </button>
      {state.show_details ? <p>Here are some details. Please read me.</p> : ""}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
