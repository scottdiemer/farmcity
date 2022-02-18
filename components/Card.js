export function Card({ children, classNames }) {
  return (
    <article
      className={`my-4 overflow-hidden bg-white shadow hover:shadow-xl rounded-xl ${classNames}`}
    >
      {children}
    </article>
  );
}
