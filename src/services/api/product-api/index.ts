import { v4 } from "uuid";

import { constants } from "src/constants";
import { ProductData, ProductEventsStoreData, ProductEventsStoreType, ProductsStoreType } from "./types";

export class ProductApi {

  private addProductEvent(data: ProductEventsStoreData) {
    window.localStorage.setItem(
      constants.storagedProducEventsKey,
      JSON.stringify(data));

    return;
  }

  private updateProductEventCount(newEventValue: object, oldData: ProductEventsStoreType) {
    window.localStorage.setItem(
      constants.storagedProducEventsKey, 
      JSON.stringify({ ...oldData, ...newEventValue }));

    return;
  }

  addProduct(data: ProductData) {
    const id = v4();
    const updatedAt: string = JSON.parse(JSON.stringify(new Date()));
    const createdAt: string = JSON.parse(JSON.stringify(new Date()));
    const newProduct = { ...data, id, updatedAt, createdAt };

    let allProducts: ProductsStoreType | null = this.getProducts();
    let allProductsEvents: ProductEventsStoreType | null = this.getProductsEvents();

    !allProducts 
      ? allProducts = { data: [newProduct] }
      : allProducts.data.push(newProduct);

    !allProductsEvents 
      ? this.addProductEvent({ 
        count: 1, deletedCount: 0, updatedCount: 0,   
        updatedDateCount: new Date(),
        updatedDateDeletedCount: new Date(),
        updatedDateUpdatedCount: new Date(), })
      : this.updateProductEventCount({ 
        count: allProducts.data.length,
        updatedDateCount: new Date(),
      }, allProductsEvents);
    
    window.localStorage.setItem(constants.storagedProductKey, JSON.stringify(allProducts));
    return;
  }

  getProductsEvents(): ProductEventsStoreType | null {
    const allProductsEvents = window.localStorage.getItem(constants.storagedProducEventsKey);

    if (!allProductsEvents) return null;
    
    return JSON.parse(allProductsEvents);
  }

  getProducts(): ProductsStoreType | null {
    const allProducts = window.localStorage.getItem(constants.storagedProductKey);

    if (!allProducts) return null;
    
    return JSON.parse(allProducts);
  }

  deleteProduct(id: string) {
    const allProducts = this.getProducts();
    const allProductsEvents = this.getProductsEvents();

    if (!allProductsEvents || !allProducts) return;

    console.log(allProducts)
    const newProducts = allProducts.data.filter(product => product.id !== id);
    
    this.updateProductEventCount({ 
      deletedCount: allProductsEvents.deletedCount +1,
      updatedDateDeletedCount: new Date(),
     }, allProductsEvents);

    window.localStorage.setItem(constants.storagedProductKey, JSON.stringify({ data: newProducts }));

    return;
  }
}