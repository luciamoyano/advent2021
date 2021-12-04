import { useState } from "react";

export default function AddGift({ handleCallback }) {
  const [inputValue, setInputValue] = useState("");

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick(i) {
    if (i !== "") {
      handleCallback(i);
      setInputValue("");
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
      <button
        type="submit"
        onClick={() => handleClick(inputValue)}
        className="add-gift"
      >
        Enviar carta
      </button>
    </div>
  );
}
