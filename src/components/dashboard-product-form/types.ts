import { ProductStoreType } from "src/services/api/product-api/types";
import { CategoriesType } from "src/utils/types";

export type DashboardProductFormProps = {
  data?: ProductStoreType;
  categories?: CategoriesType[],
  isUpdate: boolean;
}