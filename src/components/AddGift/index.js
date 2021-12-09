import { useState } from "react";

export default function AddGift({ handleCallback }) {
  const [inputValue, setInputValue] = useState("");
  const [numberValue, setNumberValue] = useState(1);

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  function numberOnChange(e) {
    setNumberValue(e.target.value);
  }

  function handleClick(gift, quantity) {
    if (gift !== "") {
      handleCallback(gift, quantity);
      setInputValue("");
      setNumberValue(1);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="agregá un regalo"
        onChange={handleOnChange}
        value={inputValue}
      />
      <input type="number" value={numberValue} onChange={numberOnChange} />
      <button
        type="submit"
        onClick={() => handleClick(inputValue, numberValue)}
        className="add-gift"
      >
        Enviar carta
      </button>
    </div>
  );
}
