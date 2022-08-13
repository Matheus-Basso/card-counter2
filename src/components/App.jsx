import { useState } from "react";
import Button from "./Button";
import InputArea from "./InputArea";
import Reset from "./Reset";

import basicStrategy from "../Tables/basic-strategy.png";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [runningCount, setRunningCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cardsBurnt, setcardsBurnt] = useState(total);
  const [noOfDecks, setNoOfDecks] = useState(0);
  const trueCount = runningCount / noOfDecks;

  if (cardsBurnt === 52) {
    setNoOfDecks(noOfDecks - 1);
    setcardsBurnt(0);
  }

  function count(value) {
    if (value === "-1") {
      setRunningCount(runningCount - 1);
    } else if (value === "+1") {
      setRunningCount(runningCount + 1);
    }
  }

  function updateTotal() {
    setTotal(total + 1);
    setcardsBurnt(cardsBurnt + 1);
  }

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function updateDeckNo() {
    setNoOfDecks(inputText);
    setInputText("");
  }

  function reset() {
    setNoOfDecks(0);
    setRunningCount(0);
    setTotal(0);
    setcardsBurnt(0);
  }

  return (
    <div>
      <img src={basicStrategy} alt="" />
      <h1>Running Count: {runningCount}</h1>
      <h1>True Count: {(Math.round(trueCount * 100) / 100).toFixed(2)}</h1>
      <h1>Total: {total}</h1>
      <h1>Number of Decks: {noOfDecks}</h1>
      <InputArea
        handleChange={handleChange}
        inputText={inputText}
        updateDeckNo={updateDeckNo}
      />
      <Button
        updateTotal={updateTotal}
        count={count}
        value="-1"
        text="10 - J - Q - K - A"
      />
      <Button
        updateTotal={updateTotal}
        count={count}
        value="0"
        text="7 - 8 - 9"
      />
      <Button
        updateTotal={updateTotal}
        count={count}
        value="+1"
        text="6 - 5 - 4 - 3 - 2"
      />
      <Reset reset={reset} />
    </div>
  );
}
