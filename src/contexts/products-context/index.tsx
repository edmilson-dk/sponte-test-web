import { createContext, useContext, useEffect, useState } from "react";

import { ProductApi } from "src/services/api/product-api";
import { ProductData, ProductsStoreType, ProductStoreType } from "src/services/api/product-api/types";
import { CreatedCountType, DeletedCountType, ProductsContextProps, ProductsContextProviderProps, UpdatedCountType } from "./types";

const ProductsContext = createContext({} as ProductsContextProps);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
  const [ onDeleteState, setOnDeleteState ] = useState(false);
  const [ onAddState, setOnAddState ] = useState(false);
  const [ onUpdateState, setOnUpdateState ] = useState(false);

  const [ updatedCount, setUpdatedCount ] = useState({} as UpdatedCountType);
  const [ deletedCount, setDeletedCount ] = useState({} as DeletedCountType);
  const [ createdCount, setCreatedCount ] = useState({} as CreatedCountType);

  const productApi = new ProductApi();

  function deleteProduct(id: string) {
    productApi.deleteProduct(id);
    setOnDeleteState(!onDeleteState);
  }

  function addProduct(data: ProductData) {
    productApi.addProduct(data);
    setOnAddState(!onAddState);
  }

  function getAllProducts(): ProductsStoreType | null {
    const products = productApi.getProducts();
    return products;
  }

  function getProductsByTitle(title: string): ProductsStoreType | null {
    const products = productApi.getProductsByTitle(title);
    return products;
  }

  function getOneProduct(id: string): ProductStoreType | null {
    const product = productApi.getOneProduct(id);
    return product;
  }

  function updateProduct(data: ProductStoreType) {
    productApi.updateProduct(data);
    setOnUpdateState(!onUpdateState);
  }

  useEffect(() => {
    const eventsData = productApi.getProductsEvents();
    if (!eventsData) return;

    setCreatedCount({ count: eventsData.count, updatedDateCount: eventsData.updatedDateCount });
  }, [onAddState]);

  useEffect(() => {
    const eventsData = productApi.getProductsEvents();
    if (!eventsData) return;

    setUpdatedCount({ 
      updatedCount: eventsData.updatedCount, 
      updatedDateUpdatedCount: eventsData.updatedDateUpdatedCount });
  }, [onUpdateState]);
 
  useEffect(() => {
    const eventsData = productApi.getProductsEvents();
    if (!eventsData) return;

    setDeletedCount({ 
      deletedCount: eventsData.deletedCount, 
      updatedDateDaletedCount: eventsData.updatedDateDeletedCount });
    setCreatedCount({ count: eventsData.count, updatedDateCount: eventsData.updatedDateCount });
  }, [onDeleteState]);

  return (
    <ProductsContext.Provider value={{ 
      deleteProduct, 
      addProduct, 
      getAllProducts,
      getOneProduct,
      updateProduct,
      createdCount, 
      deletedCount, 
      updatedCount,
      getProductsByTitle
    }}>
      { children }
    </ProductsContext.Provider>
  )
}

export function useProductsContext() {
  const context = useContext(ProductsContext);
  return context;
}