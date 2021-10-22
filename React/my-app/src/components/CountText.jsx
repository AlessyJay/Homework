import { Component } from "react";

class Count extends Component {
  render() {
    const {
      props: { count },
    } = this;
    return (
      <div>
        <h2>{count}</h2>
      </div>
    );
  }
}

export { Count };
