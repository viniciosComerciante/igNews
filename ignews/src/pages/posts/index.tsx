import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import * as prismicio from "@prismicio/client";
import { RichText } from "prismic-dom";
import prismic from "../../services/prismic";
import styles from "./styles.module.scss";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const response = await prismic.getAllByType("publication", {
  //   fetch: ["Publication.title"],
  // });

  const init = async () => {
    const prismicDoc = await prismic.getAllByType("publication", {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    });
    return prismicDoc;
  };

  const response = await init();

  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts },
    revalidate: 200,
  };
};
