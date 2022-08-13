import React from "react";

function Reset(props) {
  const { reset } = props;
  return (
    <div>
      <button onClick={reset}>
        <span>Reset</span>
      </button>
    </div>
  );
}

export default Reset;
