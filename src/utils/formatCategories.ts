type CategoriesType = {
  key: string;
  value: string;
}

export function formatCategories(data: CategoriesType[]) {
  const categories = [];
  const newData = data.slice(1, data.length);

  for(let item of newData) {
    categories.push(item.value);
  }

  return categories;
}