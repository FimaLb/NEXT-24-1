"use client";
import { Catalog } from "@/db-types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function CakesFilters({
  size,
  wheight,
}: {
  size: Catalog["sizes"];
  wheight: Catalog["wheights"];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentSize = searchParams.get("size");
  const currentWheight = searchParams.get("wheight");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const param = new URLSearchParams(searchParams.toString());
      param.set(name, value);
      return param.toString();
    },
    [searchParams]
  );

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
                  href={`${pathname}?${createQueryString("size", id)}`}
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
                  href={`${pathname}?${createQueryString("wheight", id)}`}
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
