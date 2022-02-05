export default function Address({ street, city, state, zip }) {
  return (
    <address>
      <p>{street}</p>
      <p>{`${city} ${state} ${zip}`}</p>
    </address>
  );
}
