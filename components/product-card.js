import Link from "next/link";
import Image from "next/image";

function ProductCard({ product }) {
  return (
    <article>
      <Link href={``}>
        <a>
          <Image src={product.imageUrl} alt={product.alt} />
          <div>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </div>
        </a>
      </Link>
    </article>
  );
}

export default ProductCard;
