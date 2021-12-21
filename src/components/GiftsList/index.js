import Gift from "../Gift";

export default function GiftsList({ giftsList, deleteGift }) {
  return (
    <>
      {giftsList && (
        <ul>
          {giftsList.map((gift, key) => {
            const { name, quantity, image, recipient } = gift;
            return (
              <Gift
                name={name}
                quantity={quantity}
                key={key}
                image={image}
                recipient={recipient}
                deleteGift={deleteGift}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
