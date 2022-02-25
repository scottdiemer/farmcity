import Link from "next/link";

export function LinkList({ links, className }) {
  return (
    <>
      {links.map((item) => {
        return (
          <li key={item.text} className={className}>
            <Link className="cursorpointer" href={item.path}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}
