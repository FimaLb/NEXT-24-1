import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./_data/blofPosts";

export default function Blog() {
  return (
    <main className='text-lg font-bold'>
      <h1>Blog</h1>
      <div className='flex flex-col gap-2 mt-5'>
        {blogPosts.map(({ id, title }) => (
          <Link key={id} href={`/blog/${id}`}>
            {title}
          </Link>
        ))}
      </div>
    </main>
  );
}
