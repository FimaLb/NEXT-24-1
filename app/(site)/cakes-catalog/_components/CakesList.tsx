"use client";
import { Catalog } from "@/db-types";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CakesList({ list }: { list: Catalog["cakes"] }) {
  const pathname = usePathname();

  if (!list) {
    return null;
  }

  return (
    <div className='flex items-center justify-center gap-4 flex-wrap pt-20'>
      {list.map(({ id, title, alias, description, alt, src }) => (
        <Link key={id} href={`${pathname}/${alias}`}>
          <Card className='flex flex-col self-stretch h-[480px]'>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {description ? (
                <CardDescription>{description}</CardDescription>
              ) : null}
            </CardHeader>
            <CardContent>
              <Image src={src} width={236} height={354} alt={alt} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
