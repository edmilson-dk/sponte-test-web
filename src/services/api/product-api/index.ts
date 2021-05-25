import { v4 } from "uuid";

import { constants } from "src/constants";
import { ProductData, ProductsStoreType } from "./types";

export class ProductApi {
  addProduct(data: ProductData) {
    const id = v4();
    let allProducts: ProductsStoreType | null = this.getProducts();

    if (!allProducts) {
      allProducts = {
        data: [{ ...data, id  }],
        count: 1,
        deletedCount: 0,
        updatedCount: 0,
      }
    } else {
      allProducts.data.push({ ...data, id  });
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