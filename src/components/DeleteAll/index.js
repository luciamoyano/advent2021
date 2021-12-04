export default function DeleteAll({ deleteAll }) {
  return (
    <button type="reset" onClick={() => deleteAll()}>
      Borrar todos
    </button>
  );
}
