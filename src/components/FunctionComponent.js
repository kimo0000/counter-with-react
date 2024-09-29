import { useState } from "react";
import './FunctionComponent.css';

function FunctionComponent() {

    const [count, setCount] = useState(0);

    return (
      <>
        <h3>Function Component</h3>
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span className={count <= 0 ? "count minus_zero" : "count"}>{count < 0 ? setCount(0) : count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </>
    );
}

export default FunctionComponent;