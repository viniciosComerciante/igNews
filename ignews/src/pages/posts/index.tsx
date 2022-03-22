import { GetStaticProps } from "next";
import Head from "next/head";
import * as prismicio from "@prismicio/client";
import prismic from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspace</strong>
            <p>
              In this guide, you will lean hot to create a Monorepo to manage
              Multiple packages with a share button without a memory man stage
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspace</strong>
            <p>
              In this guide, you will lean hot to create a Monorepo to manage
              Multiple packages with a share button without a memory man stage
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspace</strong>
            <p>
              In this guide, you will lean hot to create a Monorepo to manage
              Multiple packages with a share button without a memory man stage
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspace</strong>
            <p>
              In this guide, you will lean hot to create a Monorepo to manage
              Multiple packages with a share button without a memory man stage
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspace</strong>
            <p>
              In this guide, you will lean hot to create a Monorepo to manage
              Multiple packages with a share button without a memory man stage
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn workspace</strong>
            <p>
              In this guide, you will lean hot to create a Monorepo to manage
              Multiple packages with a share button without a memory man stage
            </p>
          </a>
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
    const prismicDoc = await prismic.getAllByType("publication");
    console.log(prismicDoc);
  };

  init();

  return {
    props: {},
  };
};
