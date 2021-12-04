import Gift from "../Gift";

export default function GiftsList({ giftsList, deleteGift }) {
  return (
    <>
      {giftsList && (
        <ul>
          {giftsList.map((gift, key) => {
            return <Gift name={gift} key={key} deleteGift={deleteGift} />;
          })}
        </ul>
      )}
    </>
  );
}
