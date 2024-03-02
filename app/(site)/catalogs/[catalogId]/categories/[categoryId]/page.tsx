import Link from "next/link";
import { products } from "./_data/products";

export default function Categories({
  params: { catalogId, categoryId },
}: Readonly<{
  children: React.ReactNode;
  params: { catalogId: string; categoryId: string };
}>) {
  const path = `/catalogs/${catalogId}/categories/${categoryId}/products`;

  return (
    <div>
      <h1 className='font-bold underline text-xl pb-5'>Products</h1>
      <nav className='flex flex-col'>
        {products.map(({ id, title }) => (
          <Link key={id} href={`${path}/${id}`}>
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
