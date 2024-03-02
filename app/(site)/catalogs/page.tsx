import Link from "next/link";
import { catalogs } from "./_data/catalogs";

export default function Catalog() {
  return (
    <div>
      <h1 className='font-bold underline text-xl pb-5'>Catalogs</h1>
      <nav className='flex flex-col'>
        {catalogs.map(({ id, title }) => (
          <Link key={id} href={`catalogs/${id}`}>
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
