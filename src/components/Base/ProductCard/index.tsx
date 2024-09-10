import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({
  description,
  imageUrl,
  price,
  title,
  id,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        className="w-full h-48 object-cover"
        src={imageUrl}
        sizes="100vw"
        alt={title}
        height={0}
        width={0}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>
        <p className="text-lg font-bold mb-4">${price.toFixed(2)}</p>
        <Link href={`/product/${id}`}>
          <div className="text-blue-500 hover:underline">View Details</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
