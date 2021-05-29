import { ReactNode } from "react";

import { ProductData, ProductsStoreType, ProductStoreType } from "src/services/api/product-api/types";

export type DeletedCountType = {
  deletedCount: number;
  updatedDateDaletedCount: string;
}

export type CreatedCountType = {
  count: number;
  updatedDateCount: string;
}

export type UpdatedCountType = {
  updatedCount: number;
  updatedDateUpdatedCount: string;
}

export interface ProductsContextProps {
  deleteProduct: (id: string) => void;
  addProduct: (data: ProductData) => void;
  getAllProducts: () => ProductsStoreType | null;
  getOneProduct: (id: string) => ProductStoreType | null;
  updateProduct: (data: ProductStoreType) => void;
  getProductsByTitle: (title: string) => ProductsStoreType | null;
  deletedCount: DeletedCountType;
  createdCount: CreatedCountType;
  updatedCount: UpdatedCountType;
}

export type ProductsContextProviderProps = {
  children: ReactNode;
}