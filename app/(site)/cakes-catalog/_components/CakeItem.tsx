import Link from "next/link";
import React from "react";
import TypographyH3 from "@/components/ui/TypographyH3";
import TypographyH1 from "@/components/ui/TypographyH1";
import Image from "next/image";
import TypographyP from "@/components/ui/TypographyP";
import { CakesEntity } from "@/db-types";
import { usePathname } from "next/navigation";

export default async function CakeItem({
  itemData,
}: {
  itemData: CakesEntity | null;
}) {
  if (!itemData) {
    return null;
  }

  return (
    <>
      {/* <Link href={pathname}>
        <TypographyH3>Back to Product</TypographyH3>
      </Link> */}
      <TypographyH1>{itemData?.title}</TypographyH1>
      <Image
        className='object-cover pt-20'
        src={itemData?.src}
        width={236}
        height={354}
        alt={itemData?.alt}
      />
      <TypographyP>{itemData?.description}</TypographyP>
    </>
  );
}
