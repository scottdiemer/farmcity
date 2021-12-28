function Card({ title, description, imageUrl, className }) {
  return (
    <article
      className={`p-4 my-4 overflow-hidden bg-white shadow-xl rounded-xl ${className}`}
    >
      <div>
        <img className="mx-auto" src={imageUrl} alt={title} />
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
