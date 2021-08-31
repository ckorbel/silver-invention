import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import styled from "styled-components";
import { Blog } from "../types/blogtypes";

interface BlogCardProps {
  post: Blog;
}

const BlogCardStyled = styled.div`
  a {
    display: inline-block;
  }
`;

const ContentStlyed = styled.div`
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
  top: -40px;
  left: -10px;
  .card {
    transform: rotateZ(-1deg);
  }
  .info {
    padding: 16px;
  }
  .info h4 {
    margin: 4px 0;
    text-transform: uppercase;
  }
  .info p {
    margin: 0;
    color: #777;
  }
  .actions {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  .actions a {
    color: #fff;
    background: #f01b29;
    padding: 16px 24px;
    text-decoration: none;
  }
`;

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <BlogCardStyled>
      <Image
        src={"https:" + post.fields.thumbNail.fields.file.url}
        width={post.fields.thumbNail.fields.file.details.image.width}
        height={post.fields.thumbNail.fields.file.details.image.width}
        alt="todo fill this out"
      />
      <ContentStlyed>
        <div className="info">
          <h4>{post.fields.title}</h4>
        </div>
        <NextLink href={`/post/${post.fields.slug}`}>check it out</NextLink>
      </ContentStlyed>
    </BlogCardStyled>
  );
};

export default BlogCard;
