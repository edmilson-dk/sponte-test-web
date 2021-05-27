import { DashboardProductBox } from "src/components/dashboard-product-box";
import { ProductStoreType } from "src/services/api/product-api/types";

import defaultProductImagePng from "src/assets/default-product-image.png";

export function returnBoxs(item: ProductStoreType) {
  return (
    <DashboardProductBox
      key={item.id}
      title={item.title}
      value={item.value}
      category={item.category}
      id={item.id}
      image={item.image || defaultProductImagePng}
      createdAt={item.createdAt}
    />
  );
}