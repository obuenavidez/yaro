import React from "react";
import "./Tax.css";


class Tax extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      count: 0
    };
  
    // handleIncrement increments this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ count: this.state.count + 1 });
    };
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            <h3 className="card-title"> Click Counter!</h3>
          </div>
          <div className="card-body">
            <p className="card-text">Click Count: {this.state.count}</p>
            <button className="btn btn-primary" onClick={this.handleIncrement}>
              Increment
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Tax;
  