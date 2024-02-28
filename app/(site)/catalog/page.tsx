import Link from "next/link";
import { catalogCategories } from "./_data/catalogCategories";

export default function Catalog() {
  return (
    <main className='flex min-h-screen flex-col items-left p-24'>
      <h1 className='font-bold underline'>Catalog</h1>
      {catalogCategories.map(({ id, title }) => (
        <Link key={id} href={`catalog/${id}`}>
          {title}
        </Link>
      ))}
    </main>
  );
}
