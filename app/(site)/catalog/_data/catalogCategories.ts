import { CatalogCategories, CategoryItems } from "./type";

export const catalogCategories: CatalogCategories[] = [
  {
    id: "category_1",
    title: "Category 1",
  },
  {
    id: "category_2",
    title: "Category 2",
  },
  {
    id: "category_3",
    title: "Category 3",
  },
  {
    id: "category_4",
    title: "Category 4",
  },
];

export const categoryItems: CategoryItems[] = [
  {
    id: "item_1",
    title: "Item 1",
    description: "description 1",
  },
  {
    id: "item_2",
    title: "Item 2",
    description: "description 2",
  },
  {
    id: "item_3",
    title: "Item 3",
    description: "description 3",
  },
  {
    id: "item_4",
    title: "Item 4",
    description: "description 4",
  },
];

export function getItemDataById(
  itemId: string
): Promise<CategoryItems | undefined> {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(categoryItems.find(({ id }) => id === itemId));
    }, 2000);
  });
}
