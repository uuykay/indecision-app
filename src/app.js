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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options component here
class Options extends React.Component {
  render() {
    const { options } = this.props;
    return (
      <div>
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
  render() {
    return (
      <div>
        <button>Add Option</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
