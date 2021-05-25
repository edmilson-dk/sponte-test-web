export type ProductData = {
  title: string;
  description: string;
  height: number;
  width: number;
  length: number;
  weight: number;
  barCode: string;
  category: string[];
  value: number;
  acquisition: Date;
  image: string;
}

export type ProductStoreType = {
  title: string;
  description: string;
  height: number;
  width: number;
  length: number;
  weight: number;
  barCode: string;
  category: string[];
  value: number;
  acquisition: Date;
  image: string;
  id: string;
}

export type ProductsStoreType = {
  data: ProductStoreType[],
  count: number;
  deletedCount: number;
  updatedCount: number;
}