import Button from "../Button";
import "./styles.scss";

export default function Gift({
  name,
  quantity,
  image,
  recipient,
  price,
  deleteGift,
}) {
  return (
    <>
      <li className="gift">
        <div className="image-container">
          <img className="gift-image" src={image} />
        </div>
        <div className="info-container">
          <h2 className="gift-name">{name}</h2>
          <p className="gift-recipient">Para: {recipient}</p>
          <p className="gift-quantity">Cantidad: {quantity}</p>{" "}
          <p className="gift-price">${price}</p>
          <div className="buttons">
            <Button
              type="delete"
              onClick={() => deleteGift(name)}
              id="delete-gift"
              text="Eliminar"
            />
            <Button
              type="edit"
              onClick={() => deleteGift(name)}
              id="edit-gift"
              text="Editar"
            />
          </div>
        </div>
      </li>
    </>
  );
}
