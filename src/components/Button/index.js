import "./styles.scss";

export default function Button({ id, text, type, onClick }) {
  return (
    <button id={id} onClick={onClick} type={type} className={id}>
      {text}
    </button>
  );
}
