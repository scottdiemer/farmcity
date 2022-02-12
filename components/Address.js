export default function Address({ street, city, state, zip }) {
  return (
    <address className="not-italic">
      <p>{street}</p>
      <p>{`${city} ${state} ${zip}`}</p>
    </address>
  );
}
