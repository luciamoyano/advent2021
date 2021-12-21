import "./styles.scss";

export default function Gift({ name, quantity, image, recipient, deleteGift }) {
  return (
    <>
      <li className="gift">
        <img className="gift-image" src={image} />
        <span className="gift-quantity">{quantity}</span>{" "}
        <span className="gift-name">{name}</span>
        <span className="gift-recipient">{recipient}</span>
        <button onClick={() => deleteGift(name)}>x</button>
      </li>
    </>
  );
}
