import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <Head>
        <title>About - NextJS</title>
      </Head>
      <h1 className="title">
        Ir a {""}
        <Link href={"/contact"}>
          <a>Contact</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/about/index.js</code>
      </p>
    </MainLayout>
  );
}
