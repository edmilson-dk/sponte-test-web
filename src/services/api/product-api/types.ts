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
  acquisition: string;
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
  acquisition: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export type ProductEventsType = {
  count: number;
  deletedCount: number;
  updatedCount: number;
}

export type ProductEventsStoreType = {
  count: number;
  updatedDateCount: string;
  deletedCount: number;
  updatedDateDeletedCount: string;
  updatedCount: number;
  updatedDateUpdatedCount: string;
}

export type ProductEventsStoreData = {
  count: number;
  updatedDateCount: string;
  deletedCount: number;
  updatedDateDeletedCount: string;
  updatedCount: number;
  updatedDateUpdatedCount: string;
}

export type ProductsStoreType = {
  data: ProductStoreType[];
}