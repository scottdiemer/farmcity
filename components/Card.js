import Image from "next/image";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import CardContent from "./CardContent";

export function ImageCard({
  title,
  description,
  imageUrl,
  width = "100%",
  height = "50%",
  layout = "responsive",
  objectFit = "cover",
  classNames,
}) {
  return (
    <Card className={classNames}>
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit}
      />
      <CardContent title={title} description={description} />
    </Card>
  );
}

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
      <DocumentRenderer document={description} />
    </div>
  );
}

export function Price({ children, className }) {
  return <p className={className}>{children}</p>;
}
