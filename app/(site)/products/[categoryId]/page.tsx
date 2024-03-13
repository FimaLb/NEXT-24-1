import PageWrapper from "../../../../components/ui/PageWrapper";
import Link from "next/link";
import { goods } from "../_data/goods";
import TypographyH1 from "@/components/ui/TypographyH1";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import TypographyH3 from "@/components/ui/TypographyH3";

function Category(props: { params: { categoryId: string } }) {
  const {
    params: { categoryId },
  } = props;

  const categoryGoods = goods.filter((item) => item.categoryId === categoryId);

  return (
    <PageWrapper>
      <TypographyH1>{`Category ${categoryId}`}</TypographyH1>
      <Link href='/products'>
        <TypographyH3>Back to Categories</TypographyH3>
      </Link>
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        {categoryGoods.length
          ? categoryGoods.map(
              ({ id, title, alt, scr, description, categoryId }) => (
                <Link key={id} href={`${categoryId}/goods/${id}`}>
                  <Card className='flex flex-col self-stretch h-[480px]'>
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        className='object-cover'
                        src={scr}
                        width={236}
                        height={354}
                        alt={alt}
                      />
                    </CardContent>
                    <CardFooter>description</CardFooter>
                  </Card>
                </Link>
              )
            )
          : "No items"}
      </div>
    </PageWrapper>
  );
}

export default Category;
