import Link from "next/link";
import React from "react";
import PageWrapper from "../../../components/ui/PageWrapper";
import { categories } from "./_data/categories";
import TypographyH1 from "@/components/ui/TypographyH1";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function Catalog() {
  return (
    <PageWrapper>
      <TypographyH1>Categories</TypographyH1>
      <div className='flex items-center justify-center gap-4 flex-wrap pt-20'>
        {categories.map(({ id, title, alt, scr }) => (
          <Link key={id} href={`/products/${id}`}>
            <Card className='flex flex-col self-stretch h-[480px]'>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={scr} width={236} height={354} alt={alt} />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Catalog;
