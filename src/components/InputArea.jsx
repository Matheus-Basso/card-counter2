import React from "react";

function InputArea(props) {
  const { handleChange, inputText, updateDeckNo } = props;
  return (
    <div className="form">
      <input onChange={handleChange} type="number" value={inputText} />
      <button onClick={updateDeckNo}>
        <span>Set</span>
      </button>
    </div>
  );
}

export default InputArea;
