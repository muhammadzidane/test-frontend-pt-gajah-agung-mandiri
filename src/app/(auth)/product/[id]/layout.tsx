import React from "react";

const ProductLayout: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="container mx-auto p-4">{children}</div>;
};

export default ProductLayout;
