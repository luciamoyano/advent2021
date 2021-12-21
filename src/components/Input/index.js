export default function Input({ type, id, placeholder, onChange, value }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
