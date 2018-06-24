// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.onShowDetails = this.onShowDetails.bind(this);
  }

  handleToggleVisibility() {}

  onShowDetails() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onShowDetails}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility ? <p>Here are some details. Please read me.</p> : ""}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
