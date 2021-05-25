import { ReactNode } from "react";

import { ProductData, ProductStoreType } from "src/services/api/product-api/types";

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
  deletedCount: DeletedCountType;
  createdCount: CreatedCountType;
  updatedCount: UpdatedCountType;
}

export type ProductsContextProviderProps = {
  children: ReactNode;
}