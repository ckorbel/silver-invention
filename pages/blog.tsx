import React from "react";
import NextLink from "next/link";
import Navbar from "../components/Navbar";
import { fetchEntries } from "../utils/contentfulPosts";
import { Blog, BlogPageProps } from "../types/blogtypes";

export async function getStaticProps() {
  const posts: Blog[] = await fetchEntries();
  return {
    props: {
      posts,
    },
  };
}

const BlogPage: React.FC<BlogPageProps> = (  { posts = [] }) => {
  return (
    <div>
      <Navbar />
      This is be a blog page
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.sys.id}>
              <NextLink href={`/post/${post.fields.slug}`}>
                {post.fields.title}
              </NextLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogPage;
