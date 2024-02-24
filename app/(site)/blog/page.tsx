import Image from "next/image";
import Link from 'next/link';

export default function Blog() {
  return (
    <main className="text-lg font-bold">
      <h1>Blog</h1>
      <div className="flex flex-col gap-2 mt-5">
        <Link href="/blog/1">Post 1</Link>
        <Link href="/blog/2">Post 2</Link>
        <Link href="/blog/3">Post 3</Link>
      </div>
    </main>
  );
}
