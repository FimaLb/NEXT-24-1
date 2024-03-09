"use client";
import { Catalog } from "@/db-types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CarsList = ({ data }: { data: Catalog["car"] }) => {
  const pathname = usePathname();
  if (!data) {
    return null;
  }

  return (
    <div className="flex gap-4">
      {data.map(({ id, name }) => (
        <Link
          key={id}
          href={`${pathname}/${id}`}
          className="border border-gray-800 w-20 h-20 flex items-center justify-center"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
