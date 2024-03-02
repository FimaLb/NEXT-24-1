import { Products } from "./type";

export const products: Products[] = [
  {
    id: "product_1",
    title: "Product 1",
    description: "Product 1 description",
  },
  {
    id: "product_2",
    title: "Product 2",
    description: "Product 2 description",
  },
  {
    id: "product_3",
    title: "Product 3",
    description: "Product 3 description",
  },
];

export function getProductById(
  productId: string
): Promise<Products | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(({ id }) => id === productId));
    }, 1000);
  });
}

export function getAllProducts(): Promise<Products[] | undefined> {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(products);
    }, 1000);
  });
}
