const key = import.meta.env.VITE_BEST_BUY_API_KEY;

export const PAGE_Size = 21;

export const BEST_BUY_API = (categoryPathId, page) =>
  `https://api.bestbuy.com/v1/products((categoryPath.id=${categoryPathId}))?apiKey=${key}&pageSize=${PAGE_Size}&page=${page}&format=json`;

export const PRODUCT_API = (sku) =>
  `https://api.bestbuy.com/v1/products(sku=${sku})?apiKey=${key}&show=addToCartUrl,categoryPath.id,categoryPath.name,color,customerReviewAverage,customerReviewCount,description,details.name,details.value,features.feature,image,images,includedItemList.includedItem,longDescription,manufacturer,modelNumber,name,onSale,regularPrice,salePrice,shortDescription,sku,productVariations&format=json`;

export const PRODUCT_CATEGORY = [
  "abcat0501000",
  "pcmcat209400050001",
  "abcat0401000",
  "abcat0204000",
  "pcmcat241600050001",
  "abcat0502000",
];
