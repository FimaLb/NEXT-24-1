import Link from "next/link";
import { categories } from "./_data/categories";

export default function Catalog({
  params: { catalogId },
}: Readonly<{
  children: React.ReactNode;
  params: { catalogId: string };
}>) {
  const path = `/catalogs/${catalogId}/categories`;

  return (
    <div>
      <h1 className='font-bold underline text-xl pb-5'>Categories</h1>
      <nav className='flex flex-col'>
        {categories.map(({ id, title }) => (
          <Link key={id} href={`${path}/${id}`}>
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
