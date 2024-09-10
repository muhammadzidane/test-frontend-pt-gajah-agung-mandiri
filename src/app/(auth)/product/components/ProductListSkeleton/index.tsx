import React from "react";

import { Skeleton } from "@/components";

const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(12)].map((_, skeletonIndex) => (
        <Skeleton className="w-full h-[384px]" key={skeletonIndex} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
