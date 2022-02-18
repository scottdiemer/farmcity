import { DocumentRenderer } from "@keystone-6/document-renderer";

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
