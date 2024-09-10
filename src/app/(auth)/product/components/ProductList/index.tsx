import React from "react";

import { ProductCard, Pagination } from "@/components";
import { fetchProductList } from "@/fetch";

/**
 * ProductList Component
 */
const ProductList = async ({ page = "1" }: Params) => {
  const productList = await fetchProductList({ limit: "12", skip: page });

  return (
    <div className="flex flex-col gap-6">
      <div className="font-semibold text-lg">Product List</div>
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
      <Pagination
        currentPage={productList.page}
        totalPage={productList.total}
      />
    </div>
  );
};

export default ProductList;
