import Link from "next/link";
import { categoryItems } from "../_data/catalogCategories";

export default function Categories(props: {
  params: { categoriesid: string };
}) {
  const { params } = props;
  return (
    <div className='flex flex-col text-lg font-bold'>
      <h1>Categoriesid: {params?.categoriesid}</h1>
      {categoryItems.map(({ id, title }) => (
        <Link key={id} href={`${params?.categoriesid}/${id}`}>
          {title}
        </Link>
      ))}
    </div>
  );
}
