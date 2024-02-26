import { BlogPosts } from "./type";

export const blogPosts: BlogPosts[] = [
  {
    id: "1",
    title: "Blog post 1",
  },
  {
    id: "2",
    title: "Blog post 2",
  },
  {
    id: "3",
    title: "Blog post 3",
  },
  {
    id: "4",
    title: "Blog post 4",
  },
];

export function getBlogPostById(
  blogPostId: string
): Promise<BlogPosts | undefined> {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(blogPosts.find(({ id }) => blogPostId === id));
    }, 2000);
  });
}
