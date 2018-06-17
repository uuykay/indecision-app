// Functions don't maintain context.
// const obj = {
//   name: "Vikram",
//   getName() {
//     return this.name;
//   }
// };

// getName here is a reference to a funciton, without the context of the obj object. Use bind to set the context again.
// const getName = obj.getName.bind(obj);
// console.log(getName());

// Here this works because it is being called with the context of obj
// console.log(obj.getName());

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options component here
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
    alert("handleRemoveAll");
  }
  render() {
    const { options } = this.props;
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ul>{options.map((option, i) => <Option option={option} key={i} />)}</ul>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return <li>{option}</li>;
  }
}

// AddOption -> AddOption component here
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
