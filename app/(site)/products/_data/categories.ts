import { Category } from "./type";

export const categories: Category[] = [
  {
    id: "1",
    title: "Сhocolate cakes",
    alt: "Сhocolate cakes",
    description: "For chocolate lovers",
    scr: "/categories/chocolate_cakes.jpg",
  },
  {
    id: "2",
    title: "Fruit cakes",
    alt: "Fruit cakes",
    description: "For fruit lovers",
    scr: "/categories/fruit_cakes.jpg",
  },
  {
    id: "3",
    title: "Unusual cakes",
    alt: "Unusual cakes",
    description: "For unusual cakes lovers",
    scr: "/categories/unusual_cakes.jpg",
  },
];

export const getCategoryById = (id: string) =>
  new Promise<Category | undefined>((resolve) =>
    setTimeout(() => resolve(categories.find((item) => item.id === id)), 2000)
  );
