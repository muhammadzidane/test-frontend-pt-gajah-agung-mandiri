interface ProductResponse extends BaseResponseApi {
  products: Product[];
}

interface Product {
  dimensions: ProductDimensions;
  minimumOrderQuantity: number;
  warrantyInformation: string;
  shippingInformation: string;
  discountPercentage: number;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  description: string;
  thumbnail: string;
  meta: ProductMeta;
  category: string;
  images: string[];
  rating: number;
  tags: string[];
  brand?: string;
  weight: number;
  title: string;
  price: number;
  stock: number;
  sku: string;
  id: number;
}

interface ProductDimensions {
  height: number;
  width: number;
  depth: number;
}

interface ProductReview {
  reviewerEmail: string;
  reviewerName: string;
  comment: string;
  rating: number;
  date: string;
}

interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
