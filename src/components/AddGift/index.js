import { useState, useRef } from "react";
import Input from "../Input";
import Button from "../Button";
import "./styles.scss";

export default function AddGift({ addGift, isOpen, toggleModal }) {
  const [giftValues, setGiftValues] = useState({});

  function handleOnChange(e) {
    const { id, value } = e.target;
    setGiftValues({ ...giftValues, [id]: value });
  }

  //setear giftlist aca -> enviar a localstorage
  function handleClick(giftValues) {
    if (giftValues.name !== "") {
      addGift(giftValues);
      //setInputValue("");
      //setNumberValue(1);
    }
  }

  return (
    <div id="add-gift-modal" className={`${isOpen ? "opened" : "closed"}`}>
      <div id="add-gift-container">
        <Input
          type="text"
          id="name"
          placeholder="gift name"
          onChange={handleOnChange}
          value={giftValues.name}
        />
        <Input
          type="url"
          id="image"
          placeholder="http//image"
          onChange={handleOnChange}
          value={giftValues.image}
        />
        <Input
          type="text"
          id="recipient"
          placeholder="to"
          onChange={handleOnChange}
          value={giftValues.recipient}
        />
        <Input
          type="number"
          id="quantity"
          placeholder="quantity"
          onChange={handleOnChange}
          value={giftValues.quantity}
        />
        <Input
          type="number"
          id="price"
          placeholder="price"
          onChange={handleOnChange}
          value={giftValues.price}
        />
        <div className="form-buttons">
          <Button
            type="submit"
            onClick={() => handleClick(giftValues)}
            id="submit-gift"
            text="Send letter"
          />
          <Button
            type="button"
            onClick={() => toggleModal("close")}
            id="close-modal"
            text="Close"
          />
        </div>
      </div>
    </div>
  );
}
