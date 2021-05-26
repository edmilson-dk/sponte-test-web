import { Dispatch, SetStateAction } from "react";

export type ProductMultipleInputValuesStateType = {
  key: string;
  value: string;
}

export type ProductMultipleInputValuesProps = {
  state: ProductMultipleInputValuesStateType[];
  setState: Dispatch<SetStateAction<ProductMultipleInputValuesStateType[]>>;
  name: string;
  label: string;
}