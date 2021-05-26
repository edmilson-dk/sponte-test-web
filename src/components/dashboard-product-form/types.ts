import { ProductData } from "src/services/api/product-api/types";
import { CategoriesType } from "src/utils/types";

export type DashboardProductFormProps = {
  data?: ProductData;
  categories?: CategoriesType[],
  isUpdate: boolean;
}