export default function Gift({ name, deleteGift }) {
  return (
    <>
      <li>
        {name}
        <span onClick={() => deleteGift(name)}> x</span>
      </li>
    </>
  );
}
