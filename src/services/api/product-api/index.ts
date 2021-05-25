import { v4 } from "uuid";

import { constants } from "src/constants";
import { ProductData, ProductsStoreType } from "./types";

export class ProductApi {
  addProduct(data: ProductData) {
    const id = v4();
    const updatedAt = new Date;
    const createdAt = new Date;
    const newProduct = { ...data, id, updatedAt, createdAt };

    let allProducts: ProductsStoreType | null = this.getProducts();

    if (!allProducts) {
      allProducts = {
        data: [newProduct],
        count: 1,
        deletedCount: 0,
        updatedCount: 0,
      }
    } else {
      allProducts.data.push(newProduct);
      allProducts.count = allProducts.data.length;
    }

    window.localStorage.setItem(constants.storagedProductKey, JSON.stringify(allProducts));
    return;
  }

  getProducts(): ProductsStoreType | null {
    const allProducts = window.localStorage.getItem(constants.storagedProductKey);

    if (!allProducts) return null;
    
    return JSON.parse(allProducts);
  }
}