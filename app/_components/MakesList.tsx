import { Catalog } from "@/db-types";
import Link from "next/link";

export const MakesList = ({ data }: { data: Catalog["make"] }) => {
  if (!data) {
    return null;
  }

  return (
    <div className='flex gap-4'>
      {data.map(({ id, alias, name }) => (
        <Link
          key={id}
          href={`/catalog/${alias}`}
          className='border border-gray-800 w-20 h-20 flex items-center justify-center'
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
