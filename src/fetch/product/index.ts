import { customFetch } from "@/helpers";

export const productFetchList = async (params: UnknownParams) => {
  const result: ProductResponse = await customFetch("/products", {
    next: { revalidate: 60 },
    method: "get",
    params,
  });
  return result;
};
