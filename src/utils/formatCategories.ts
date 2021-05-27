import { v4 } from "uuid";
import { CategoriesType } from "./types";

export function formatCategories(data: CategoriesType[]): string[] {
  const categories = [];

  for(let item of data) {
    categories.push(item.value);
  }

  return categories;
}

export function formatArrayCategories(data: string[]): CategoriesType[] {
  const newData: CategoriesType[] = data.map(item => {
    return {
      key: v4(),
      value: item,
    }
  });

  return newData;
}