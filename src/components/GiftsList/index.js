import Gift from "../Gift";
import "./styles.scss";

export default function GiftsList({ giftsList, deleteGift }) {
  return (
    <>
      {giftsList && (
        <ul className="gift-list">
          {giftsList.map((gift, key) => {
            const { name, quantity, image, recipient, price } = gift;
            return (
              <Gift
                name={name}
                quantity={quantity}
                key={key}
                image={image}
                recipient={recipient}
                price={price}
                deleteGift={deleteGift}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
