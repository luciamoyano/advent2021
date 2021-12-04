import { useState } from "react";

export default function AddGift({ handleClick }) {
  const [inputValue, setInputValue] = useState("");

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="agregá un regalo"
        onChange={handleOnChange}
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
