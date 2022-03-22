import Head from "next/head";
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
