import PageWrapper from "../../../../../../components/ui/PageWrapper";
import Link from "next/link";
import React from "react";
import { getGoodById, goods } from "@/app/(site)/products/_data/goods";
import TypographyH3 from "@/components/ui/TypographyH3";
import TypographyH1 from "@/components/ui/TypographyH1";
import Image from "next/image";
import TypographyP from "@/components/ui/TypographyP";

export const generateStaticParams = () => {
  return goods
    .filter((_, i) => i < 5)
    .map(({ id, categoryId }) => ({
      goodId: String(id),
      categoryId: String(categoryId),
    }));
};

const Good = async (props: {
  params: { categoryId: string; goodId: string };
}) => {
  const {
    params: { categoryId, goodId },
  } = props;

  const goodDetails = await getGoodById(goodId);

  if (!goodDetails) {
    return "No good details";
  }

  return (
    <PageWrapper>
      <Link href={`/products/${categoryId}`}>
        <TypographyH3>Back to Product</TypographyH3>
      </Link>
      <TypographyH1>{`Cake ${goodId}`}</TypographyH1>
      <Image
        className='object-cover pt-20'
        src={goodDetails.scr}
        width={236}
        height={354}
        alt={goodDetails.alt}
      />
      <TypographyP>{goodDetails.description}</TypographyP>
    </PageWrapper>
  );
};

export default Good;
