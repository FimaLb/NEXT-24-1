import Link from "next/link";

export default function Categories(props: {
  params: { categoriesid: string };
}) {
  const { params } = props;
  return (
    <div className='flex flex-col text-lg font-bold'>
      <h1>Categoriesid: {params?.categoriesid}</h1>
      <Link href={`${params?.categoriesid}/1`}>Item_1</Link>
      <Link href={`${params?.categoriesid}/2`}>Item_2</Link>
      <Link href={`${params?.categoriesid}/3`}>Item_3</Link>
    </div>
  );
}
