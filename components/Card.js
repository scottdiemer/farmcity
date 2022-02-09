import Image from "next/image";
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

export function SaleCard({
  title,
  description,
  imageUrl,
  price,
  salePrice,
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
      <Price price={price} salePrice={salePrice} />
    </Card>
  );
}

export function Price({ price, salePrice, priceClass, saleClass }) {
  return (
    <div>
      <p classNames={priceClass}>Price: {price}</p>
      {salePrice && <p classNames={saleClass}>Sale: {salePrice}</p>}
    </div>
  );
}
