import { v4 } from "uuid";

import { constants } from "src/constants";
import { ProductData, ProductEventsStoreData, ProductEventsStoreType, ProductsStoreType, ProductStoreType } from "./types";

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
    const updatedAt: string = new Date().toISOString();
    const createdAt: string = new Date().toISOString();
    const newProduct = { ...data, id, updatedAt, createdAt };

    let allProducts: ProductsStoreType | null = this.getProducts();
    let allProductsEvents: ProductEventsStoreType | null = this.getProductsEvents();

    !allProducts 
      ? allProducts = { data: [newProduct] }
      : allProducts.data.push(newProduct);

    !allProductsEvents 
      ? this.addProductEvent({ 
        count: 1, deletedCount: 0, updatedCount: 0,   
        updatedDateCount: new Date().toISOString(),
        updatedDateDeletedCount: new Date().toISOString(),
        updatedDateUpdatedCount: new Date().toISOString() })
      : this.updateProductEventCount({ 
        count: allProducts.data.length,
        updatedDateCount: new Date().toISOString(),
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

  getOneProduct(id: string): ProductStoreType | null {
    const allProducts = window.localStorage.getItem(constants.storagedProductKey);
    if (!allProducts) return null;

    const products: ProductsStoreType = JSON.parse(allProducts);
    const product = products.data.find(item => item.id === id);
      
    return product ? product : null;
  }

  updateProduct(data: ProductStoreType) {
    const updatedAt = new Date().toISOString();
    const products = this.getProducts();
    const allProductsEvents: ProductEventsStoreType | null = this.getProductsEvents();

    if (!products || !allProductsEvents) return;

    const index = products.data.findIndex(item => item.id === data.id);
    products.data[index] = { ...data, updatedAt };

    this.updateProductEventCount({ 
      updatedCount: allProductsEvents.updatedCount+1,
      updatedDateUpdatedCount: updatedAt,
    }, allProductsEvents);

    window.localStorage.setItem(constants.storagedProductKey, JSON.stringify(products));

    return;
  }

  deleteProduct(id: string) {
    const allProducts = this.getProducts();
    const allProductsEvents = this.getProductsEvents();

    if (!allProductsEvents || !allProducts) return;

    const newProducts = allProducts.data.filter(product => product.id !== id);
    
    this.updateProductEventCount({ 
      deletedCount: allProductsEvents.deletedCount +1,
      updatedDateDeletedCount: new Date().toISOString(),
      count: allProducts.data.length-1,
      updatedDateCount: new Date().toISOString(),
     }, allProductsEvents);

    window.localStorage.setItem(constants.storagedProductKey, JSON.stringify({ data: newProducts }));

    return;
  }
}