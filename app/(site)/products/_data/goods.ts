import { Good } from "./type";

export const goods: Good[] = [
  {
    id: "1",
    title: "Cake 1",
    alt: "Сhocolate cakes",
    scr: "/cakes/chocolate-1.jpg",
    description: "description",
    categoryId: "1",
  },
  {
    id: "2",
    title: "Cake 2",
    alt: "Сhocolate cakes",
    scr: "/cakes/chocolate-2.jpg",
    description: "description",
    categoryId: "1",
  },
  {
    id: "3",
    title: "Cake 3",
    alt: "Сhocolate cakes",
    scr: "/cakes/chocolate-3.jpg",
    description: "description",
    categoryId: "1",
  },
  {
    id: "4",
    title: "Cake 4",
    alt: "Сhocolate cakes",
    scr: "/cakes/chocolate-4.jpg",
    description: "description",
    categoryId: "1",
  },
  {
    id: "5",
    title: "Cake 5",
    alt: "Fruit cakes",
    scr: "/cakes/chocolate-1.jpg",
    description: "description",
    categoryId: "2",
  },
  {
    id: "6",
    title: "Cake 6",
    alt: "Fruit cakes",
    scr: "/cakes/chocolate-2.jpg",
    description: "description",
    categoryId: "2",
  },
  {
    id: "7",
    title: "Cake 7",
    alt: "Fruit cakes",
    scr: "/cakes/chocolate-3.jpg",
    description: "description",
    categoryId: "2",
  },
  {
    id: "8",
    title: "Cake 8",
    alt: "Fruit cakes",
    scr: "/cakes/chocolate-4.jpg",
    description: "description",
    categoryId: "2",
  },
  {
    id: "9",
    title: "Cake 9",
    alt: "Unusual cakes",
    scr: "/cakes/chocolate-1.jpg",
    description: "description",
    categoryId: "3",
  },
  {
    id: "10",
    title: "Cake 10",
    alt: "Unusual cakes",
    scr: "/cakes/chocolate-2.jpg",
    description: "description",
    categoryId: "3",
  },
  {
    id: "11",
    title: "Cake 11",
    alt: "Unusual cakes",
    scr: "/cakes/chocolate-3.jpg",
    description: "description",
    categoryId: "3",
  },
  {
    id: "12",
    title: "Cake 12",
    alt: "Unusual cakes",
    scr: "/cakes/chocolate-4.jpg",
    description: "description",
    categoryId: "3",
  },
];

export const getGoodById = (id: string) =>
  new Promise<Good | undefined>((resolve) =>
    setTimeout(() => resolve(goods.find((item) => item.id === id)), 2000)
  );
