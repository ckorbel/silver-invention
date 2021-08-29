import React from "react";
import NextLink from "next/link";
import { Blog } from "../types/blogtypes";

interface BlogPageProps {
  posts: Blog[];
}

const BlogPosts: React.FC<BlogPageProps> = ({ posts = [] }) => {
  return (
    <div>
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

export default BlogPosts;
