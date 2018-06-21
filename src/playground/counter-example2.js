class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    console.log("handleAddOne");
    console.log(this);
  }

  handleMinusOne() {
    console.log("handleMinusOne");
  }

  handleReset() {
    console.log("handleReset");
  }

  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// Create 3 methods: handleAddOne, handleMinusOne, handleReset
// Console.log method name
// Wire up onClick and bind in the constructor

ReactDOM.render(<Counter />, document.getElementById("app"));
