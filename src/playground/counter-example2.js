// count - setup default prop value to 0
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }

  handleAddOne() {
    console.log("handleAddOne");
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    console.log("handleMinusOne");
    // Async shallow merge of state
    // https://reactjs.org/docs/react-component.html
    // let prev_state = this.state.count;
    // this.setState({ count: prev_state - 1 });

    // Using an updater function (optional callback not used).
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  handleReset() {
    console.log("handleReset");
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

// Create 3 methods: handleAddOne, handleMinusOne, handleReset
// Console.log method name
// Wire up onClick and bind in the constructor

ReactDOM.render(<Counter count="50" />, document.getElementById("app"));
