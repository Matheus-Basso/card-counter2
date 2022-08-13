import React from "react";

function Button(props) {
  const { text, count, value, updateTotal } = props;
  return (
    <div>
      <button
        onClick={() => {
          count(value);
          updateTotal();
        }}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

export default Button;
