import { Component } from "react";


class ClassComponent extends Component {
  state = {
    count: 0
  }

  
  render () {
      console.log(this.state.count);
      return (
        <>
          <h3>Class Component</h3>
          <div className="counter">
            <button
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              -
            </button>
            <span
              className={this.state.count <= 0 ? "count minus_zero" : "count"}
            >
              {this.state.count}
            </span>
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              +
            </button>
            <button
              onClick={() => this.setState({ count: 0})}
            >
              Reset
            </button>
          </div>
        </>
      );
 }

 componentWillUnmount (){
    this.setState({ count: 0 });
 }
}

export default ClassComponent;