import { customFetch } from "@/helpers";

export const fetchProductList = async (params: UnknownParams) => {
  const result: ProductListResponse = await customFetch("/products", {
    next: { revalidate: 60 },
    method: "get",
    params,
  });
  return result;
};

export const fetchProductDetail = async (path: ProductDetailPath) => {
  const result: ProductDetailResponse = await customFetch(
    `/products/${path.id}`,
    {
      next: { revalidate: 60 },
      method: "get",
    }
  );
  return result;
};
