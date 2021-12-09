import Gift from "../Gift";

export default function GiftsList({ giftsList, deleteGift }) {
  return (
    <>
      {giftsList && (
        <ul>
          {giftsList.map((gift, key) => {
            const { name, quantity } = gift;
            return (
              <Gift
                name={name}
                quantity={quantity}
                key={key}
                deleteGift={deleteGift}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
