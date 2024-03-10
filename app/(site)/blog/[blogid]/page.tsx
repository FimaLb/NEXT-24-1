import { blogPosts, getBlogPostById } from "../_data/blofPosts";
import { Button } from "./_components/Button";
import NotFound from "./not-found";

export function generateStaticParams() {
  // return [{ blogid: "1" }, { blogid: "2" }, { blogid: "3" }];

  return blogPosts.map((id) => ({ blogid: id.toString() }));
}

export default async function BlogDetail(props: {
  params: { blogid: string };
}) {
  const { params } = props;
  const blogPost = await getBlogPostById(params?.blogid);
  if (!blogPost) {
    return NotFound(); // to do 404
  }

  return (
    <main className='text-lg font-bold'>
      <h1>BlogDetail {blogPost.title}</h1>
      <Button />
    </main>
  );
}
