import Link from "next/link";

export default function Catalog() {
  return (
    <main className='flex min-h-screen flex-col items-left p-24'>
      <h1 className='font-bold underline'>Catalog</h1>
      <Link href='catalog/categories1'>Categories_1</Link>
      <Link href='catalog/categories2'>Categories_2</Link>
      <Link href='catalog/categories3'>Categories_3</Link>
    </main>
  );
}
