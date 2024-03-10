"use client";
import { Catalog } from "@/db-types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function CakesFilters({
  size,
  wheight,
}: {
  size: Catalog["size"];
  wheight: Catalog["wheight"];
}) {
  console.log("size", size);
  console.log("wheight", wheight);
  const searchParams = useSearchParams();
  const currentSize = searchParams.get("sizeId");
  const currentWheight = searchParams.get("wheightId");
  const pathname = usePathname();

  return (
    <div className='flex gap-4'>
      {size ? (
        <div>
          <h3>Size</h3>
          <div>
            {size.map(({ value, id }) => {
              return (
                <Link
                  key={id}
                  className={cn(
                    "border border-green-600 p-3 flex items-center justify-center",
                    {
                      ["bg-green-700"]: currentSize === id,
                    }
                  )}
                  href={`?size=${id}`}
                >
                  {value}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
      {wheight ? (
        <div>
          <h3>Wheight</h3>
          <div>
            {wheight.map(({ value, id }) => {
              return (
                <Link
                  key={id}
                  className={cn(
                    "border border-green-600 p-3 flex items-center justify-center",
                    {
                      ["bg-green-700"]: currentWheight === id,
                    }
                  )}
                  href={`?wheight=${id}`}
                >
                  {value}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
