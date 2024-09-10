import React, { Suspense } from "react";

import { type Metadata } from "next";

import { ProductListSkeleton, ProductList } from "./components";

export const metadata: Metadata = {
  title: "Products - Test Frontend",
  description: "...",
};

const Product: React.FC<ParamPageProps> = ({ searchParams }) => {
  return (
    <div>
      <div className="mb-10 font-semibold text-xl text-green-700">
        Welcome to our Product
      </div>

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList order={searchParams.order} page={searchParams.page} />
      </Suspense>
    </div>
  );
};

export default Product;
