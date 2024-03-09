"use client";

import { Catalog } from "@/db-types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export const ColorsList = ({ data }: { data: Catalog["color"] }) => {
  const searchParams = useSearchParams();
  const currentColor = searchParams.get("color");
  const pathname = usePathname();
  if (!data) {
    return null;
  }
  return (
    <div className="flex gap-4">
      <Link
        className={cn(
          "border border-green-600 p-3 flex items-center justify-center",
          {
            ["bg-green-700"]: !currentColor,
          },
        )}
        href={pathname}
      >
        All
      </Link>
      {data.map(({ id, name }) => (
        <Link
          key={id}
          href={`?color=${id}`}
          className={cn(
            "border border-green-600 p-3 flex items-center justify-center",
            {
              ["bg-green-700"]: currentColor === id,
            },
          )}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
