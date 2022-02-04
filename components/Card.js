import Image from "next/image";

function Card({
  title,
  description,
  imageUrl,
  width = "100%",
  height = "50%",
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
        layout="responsive"
        objectFit="cover"
      />
      <div className="p-4">
        <h2 className="text-2xl text-center text-olive-drab-camouflage">
          {title}
        </h2>
        <p className="py-2 text-sm text-center">{description}</p>
      </div>
    </article>
  );
}

export default Card;
