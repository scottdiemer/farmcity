import Image from "next/image";

function Card({ title, description, imageUrl, className }) {
  return (
    <article
      className={`p-4 my-4 overflow-hidden bg-white shadow-xl rounded-xl ${className}`}
    >
      <div className="h-100 w-100">
        <Image
          className
          src={imageUrl}
          alt={title}
          layout="responsive"
          height="100%"
          width="150px"
        />
      </div>
      <div>
        <h2 className="text-2xl text-center text-olive-drab-camouflage">
          {title}
        </h2>
        <p className="py-2 text-sm text-center">{description}</p>
      </div>
    </article>
  );
}

export default Card;
