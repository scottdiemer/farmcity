import Image from "next/image";
import CardContent from "./CardContent";

function Card({
  title,
  description,
  imageUrl,
  width = "100%",
  height = "50%",
  layout = "responsive",
  objectFit = "cover",
  className,
}) {
  return (
    <article
      className={`my-4 overflow-hidden bg-white shadow hover:shadow-xl rounded-xl ${className}`}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit}
      />
      <CardContent title={title} description={description} />
    </article>
  );
}

export function SaleCard({
  title,
  description,
  imageUrl,
  price,
  salePrice,
  className,
}) {
  return (
    <Card
      title={title}
      description={description}
      imageUrl={imageUrl}
      className={className}
    />
  );
}

export default Card;
