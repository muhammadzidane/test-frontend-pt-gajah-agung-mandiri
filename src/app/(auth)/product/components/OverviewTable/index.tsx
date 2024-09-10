import React from "react";

import { ProductCard } from "@/components";
import { productFetchList } from "@/fetch";

/**
 * OverviewTable Component
 */
const OverviewTable = async ({ page = "1" }: Params) => {
  const productList = await productFetchList({ limit: "10", page });

  return (
    <div>
      <div className="mb-4 font-semibold text-lg">Product List</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {productList.products.map((product, productIndex) => (
          <ProductCard
            description={product.description}
            imageUrl={product.images[0]}
            title={product.title}
            price={product.price}
            key={productIndex}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default OverviewTable;
