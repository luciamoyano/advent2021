import { useState } from "react";
import Input from "../Input";

export default function AddGift({ handleCallback }) {
  const [giftValues, setGiftValues] = useState({});

  function handleOnChange(e) {
    const { id, value } = e.target;
    setGiftValues({ ...giftValues, [id]: value });
  }

  //setear giftlist aca -> enviar a localstorage
  function handleClick(giftValues) {
    if (giftValues.name !== "") {
      handleCallback(giftValues);
      //setInputValue("");
      //setNumberValue(1);
    }
  }

  return (
    <div>
      <Input
        type="text"
        id="name"
        placeholder="agregá un regalo"
        onChange={handleOnChange}
        value={giftValues.name}
      />
      <Input
        type="url"
        id="image"
        placeholder="http//imagen"
        onChange={handleOnChange}
        value={giftValues.image}
      />
      <Input
        type="text"
        id="recipient"
        placeholder="destinatario"
        onChange={handleOnChange}
        value={giftValues.recipient}
      />
      <Input
        type="number"
        id="quantity"
        placeholder="cantidad"
        onChange={handleOnChange}
        value={giftValues.quantity}
      />
      <button
        type="submit"
        onClick={() => handleClick(giftValues)}
        className="add-gift"
      >
        Enviar carta
      </button>
    </div>
  );
}
