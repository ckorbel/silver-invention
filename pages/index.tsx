import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

import About from "../components/About";
import { Blog } from "../types/blogtypes";
import { fetchEntries } from "../utils/contentfulPosts";
import Experiments from "../components/Experiments";
import BlogCard from "../components/Posts";

const PostContainerStyled = styled.div`
  border: 1px solid blue;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  width: -webkit-fill-available;
`;

export async function getStaticProps() {
  const posts: Blog[] = await fetchEntries();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts = [] }) {
  console.log({ posts }); // todo get an image with blog post meta data
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Korbel</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <meta property="og:title" content="Chris Korbel | Front End Developr" />
        <meta
          property="og:description"
          content="JavaScript, Typescript, Data Visualization, D3, D3.js, Three.js, Python"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
      <PostContainerStyled>
        {posts &&
          posts.map((post) => <BlogCard key={post.sys.id} post={post} />)}
      </PostContainerStyled>
      <Experiments />
      <Footer />
    </div>
  );
}
