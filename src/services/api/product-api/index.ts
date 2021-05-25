import { v4 } from "uuid";

import { constants } from "src/constants";
import { ProductData } from "./types";

export class ProductApi {
  static addProduct(data: ProductData) {
    const id = v4();

    window.localStorage.setItem(constants.storagedProductKey, JSON.stringify({ ...data, id }));
    return;
  }
}