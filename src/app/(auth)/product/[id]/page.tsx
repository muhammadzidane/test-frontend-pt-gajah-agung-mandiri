import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { fetchProductDetail } from "@/fetch";

export const metadata: Metadata = {
  title: "Products - Test Frontend",
  description: "...",
};

const ProductDetail = async ({ params }: PageParamIdProps) => {
  const product = await fetchProductDetail({ id: params.id });

  return (
    <>
      <Link href="/product">
        <div className="text-blue-500 hover:underline">Back to List</div>
      </Link>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
        <div className="relative">
          <Image
            className="w-full h-64 object-contain"
            src={product.images[0]}
            sizes="100vw"
            alt="title"
            height={0}
            width={0}
          />
          {product.images.length > 1 && (
            <>
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg">
                &#8249;
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg">
                &#8250;
              </button>
            </>
          )}
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold mb-4">${product.price}</p>
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full`}
          >
            {product.availabilityStatus}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
