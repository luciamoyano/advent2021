import "./styles.scss";

export default function Gift({ name, quantity, deleteGift }) {
  return (
    <>
      <li className="gift">
        <span className="gift-quantity">{quantity}</span>{" "}
        <span className="gift-name">{name}</span>
        <button onClick={() => deleteGift(name)}>x</button>
      </li>
    </>
  );
}
