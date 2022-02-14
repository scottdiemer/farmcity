import { DocumentRenderer } from "@keystone-6/document-renderer";

export function Card({ children, classNames }) {
  return (
    <article
      className={`my-4 overflow-hidden bg-white shadow hover:shadow-xl rounded-xl ${classNames}`}
    >
      {children}
    </article>
  );
}

export function Description({ description, className }) {
  return (
    <div className={className}>
      {typeof description === "object" ? (
        <DocumentRenderer document={description} />
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}

export function Price({ children, className }) {
  return <p className={className}>{children}</p>;
}
